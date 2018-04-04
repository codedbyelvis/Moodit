require('dotenv').config()
const express = require('express'),
        bodyParser = require('body-parser'),
        ctrl = require('./controllers/controllers'),
        snoowrap = require('snoowrap'),
        ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
        
const {
        SERVER_PORT,
        CLIENT_ID,
        CLIENT_SECRET,
        REFRESH_TOKEN,
        USER_AGENT,
        WATSON_USERNAME,
        PASSWORD
} = process.env;
// console.log(WATSON_USERNAME, PASSWORD);

const app = express();
app.use(bodyParser.json());

// reddit api credentials
const r = new snoowrap({
        userAgent: USER_AGENT,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN
});

// watson api credentials
const tone_analyzer = new ToneAnalyzerV3(
        {
                username: WATSON_USERNAME,
                password: PASSWORD,
                version_date: '2017-09-21'
        });

app.post('/api/text', (req, res, next) => {
        console.log(req.body.text)
        
})

//-----------watson/reddit--------------

app.post('/api/user', (req, res, next) => {
        r.getUser(req.body.user).getComments().then(cmt => { // any reddit user can be passed into getUser
                var userStr = ''
                for (let i = 0; i < cmt.length; i++) {
                        userStr += cmt[i].body + ' '
                }
                const redditInfo = cmt;

                ///get picture from reddit
                r.getUser(req.body.user).fetch().then(userInfos => {
                        var picture = userInfos.icon_img

                        //watson api below
                        if (userStr.length > 0) {
                                // The text that we want to analyze the tone of.
                                var text = userStr;
                                // Turn our text into valid json.
                                var input = { "text": text };
                                // The format that the tone analyzer needs. 
                                var params =
                                        {
                                                'tone_input': input,
                                                'content_type': 'application/json'
                                        };


                                // Use our Tone Analyzer variable to analyze the tone.
                                tone_analyzer.tone(params, function (error, response) {
                                        // There's an error.
                                        if (error) {
                                                console.log('Error:', error);
                                        }
                                        // No error, we got our tone result.
                                        else {
                                                // The tone of the text, as determined by watson.
                                                var tone = JSON.stringify(response, null, 2)
                                                var learning = JSON.parse(tone);
                                                var toneNum = []
                                                for (let i = 0; i < learning.document_tone.tones.length; i++) {
                                                        var redditNum = (learning.document_tone.tones[i].score * 100).toFixed(2)
                                                        var realNum = parseInt(redditNum, 10)
                                                        // console.log(typeof realNum)
                                                        toneNum.push(redditNum)

                                                }
                                                toneName = []
                                                for (let i = 0; i < learning.document_tone.tones.length; i++) {
                                                        toneName.push(learning.document_tone.tones[i].tone_name)

                                                }
                                                // learning.document_tone.tones[0].score
                                                // console.log(toneNum)
                                                // console.log( 'tone',learning.document_tone.tones);
                                                // Output Watson's tone analysis to the console.
                                                // console.log("The tone analysis for \'" + text + "\' is:\n");
                                                // console.log(tone)

                                                const redditWatson = {
                                                        reddit: redditInfo,
                                                        watson: tone,
                                                        watsonNum: toneNum,
                                                        iconPic: picture,
                                                        toneId: toneName
                                                }
                                                res.status(200).send(redditWatson)
                                        }
                                }
                                );
                        } else {
                        }
                })
        })
})

const promiseToneAnalyzer = params => {
        return new Promise((resolve, reject) => tone_analyzer.tone(params, (error, response) => {
                if (error) {
                        reject(error)
                } else {
                        resolve(response)
                }
        }))
}

app.get('/api/comments', (req, res, next) => {
        ////get comments from top 25 subreddits
        let itetator = 0
        var subName = ''
        var postTitle = ''
        var link = ''
        var redditHot = []
        var newArray = []
        var commentStack = []
        r.getHot()
                .then(resp => {
                        for (let j = 0; j < 25; j++) {
                                subName = resp[j].subreddit.display_name
                                postTitle = resp[j].title
                                link = resp[j].permalink
                                // console.log(subId)
                                var subId = resp[j].id
                                // console.log(resp[0])
                                // console.log(resp[j].title, subId)
                                var postInfo = {
                                        subName: subName,
                                        postTitle: postTitle,
                                        link: 'http://reddit.com'+link,
                                        redditComments: [],
                                        subId: subId,
                                        watsonInfo: []
                                }
                                redditHot.push(postInfo)
                                newArray.push(r.getSubmission(subId).comments)
                        }
                        
                        //gathering all the comments for each post and placing them in the Array in the correct order
                        Promise.all(newArray).then(responses => {
                                redditHot.forEach((post, i) => {
                                        post.redditComments = responses[i].map(c => c.body)
                                        var commentsStr = ''

                                        redditHot[i].redditComments.forEach((sentence, i) => {
                                                commentsStr += sentence + ' '

                                        })


                                        //Watson call to analyze the comments 
                                        if (commentsStr.length > 0) {
                                                var text = commentsStr
                                                var input = { "text": text }

                                                var params = {
                                                        'tone_input': input,
                                                        'content_type': 'application/json'
                                                };

                                                commentStack.push(promiseToneAnalyzer(params))
                                        } else { }

                                })
                                Promise.all(commentStack).then(watsonResponses => {
                                        redditHot.forEach((post, i) => {
                                                redditHot[i].watsonInfo = watsonResponses[i]
                                        })

                                }).then(() => {

                                        res.status(200).send(redditHot)
                                })
                        })
                })
})

app.get('/api/test', ctrl.get)



app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`);
})