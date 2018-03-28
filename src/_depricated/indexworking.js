// require('dotenv').config()
// const express = require('express'),
//         bodyParser = require('body-parser'),
//         ctrl = require('./controllers/controllers'),
//         snoowrap = require('snoowrap'),
//         ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3'),
//         waitUnti = require('wait-until');




// const {
//         SERVER_PORT,
//         CLIENT_ID,
//         CLIENT_SECRET,
//         REFRESH_TOKEN,
//         USER_AGENT,
//         WATSON_USERNAME,
//         PASSWORD
// } = process.env;
// // console.log(WATSON_USERNAME, PASSWORD);

// const app = express();
// app.use(bodyParser.json());

// // reddit api
// const r = new snoowrap({
//         userAgent: USER_AGENT,
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN
// });



// //-----------watson/reddit--------------

// app.post('/api/user', (req, res, next) => {
//         console.log(req.body.user);
//         r.getUser(req.body.user).getComments().then(cmt => { // any reddit user can be passed into getUser
//                 var userStr = ''
//                 for (let i = 0; i < cmt.length; i++) {
//                         userStr += cmt[i].body + ' '
//                 }
//                 const redditInfo = cmt;
//                 // console.log('this is the info', redditInfo);
//                 console.log(userStr);

//                 ///get picture from reddit
//                 r.getUser(req.body.user).fetch().then(userInfos => {
//                         var picture = userInfos.icon_img
//                         console.log(picture)

//                         //watson api below
//                         if (userStr.length > 0) {
//                                 // console.log(myResponse);

//                                 // The text that we want to analyze the tone of.
//                                 var text = userStr;

//                                 // Turn our text into valid json.
//                                 var input = { "text": text };

//                                 // The format that the tone analyzer needs. 
//                                 var params =
//                                         {
//                                                 'tone_input': input,
//                                                 'content_type': 'application/json'
//                                         };

//                                 // Initialize the Tone Analyzer by giving it our credentials.
//                                 var tone_analyzer = new ToneAnalyzerV3(
//                                         {
//                                                 username: WATSON_USERNAME,
//                                                 password: PASSWORD,
//                                                 version_date: '2017-09-21'
//                                         });

//                                 // Use our Tone Analyzer variable to analyze the tone.
//                                 tone_analyzer.tone(params, function (error, response) {
//                                         // There's an error.
//                                         if (error) {
//                                                 console.log('Error:', error);
//                                         }
//                                         // No error, we got our tone result.
//                                         else {
//                                                 // The tone of the text, as determined by watson.
//                                                 var tone = JSON.stringify(response, null, 2)
//                                                 var learning = JSON.parse(tone);
//                                                 var toneNum = ''
//                                                 for (let i = 0; i < learning.document_tone.tones.length; i++) {
//                                                         toneNum += (learning.document_tone.tones[i].score * 100).toFixed(2) + '  '

//                                                 }
//                                                 toneName = ''
//                                                 for (let i = 0; i < learning.document_tone.tones.length; i++) {
//                                                         toneName += learning.document_tone.tones[i].tone_name + '  '

//                                                 }
//                                                 // learning.document_tone.tones[0].score
//                                                 console.log(toneNum)
//                                                 // console.log( 'tone',learning.document_tone.tones);
//                                                 // Output Watson's tone analysis to the console.
//                                                 console.log("The tone analysis for \'" + text + "\' is:\n");
//                                                 console.log(tone)

//                                                 const redditWatson = {
//                                                         reddit: redditInfo,
//                                                         watson: tone,
//                                                         watsonNum: toneNum,
//                                                         iconPic: picture,
//                                                         toneId: toneName
//                                                 }
//                                                 res.status(200).send(redditWatson)
//                                         }
//                                 }
//                                 );
//                         } else {
//                                 //     console.log(userStr);
//                         }
//                 })
//         })
//         // .catch(console.log('asdfasdf'))
//         // res.status(500).send('helloworld')
// })

// app.get('/api/comments', (req, res, next) => {
//         ////get comments from top 25 subreddits
//         let itetator = 0



//         var subName = ''
//         var postTitle = ''
//         var link = ''


//         r.getHot()
//                 .then(resp => {
//                         let redditHot = []


//                         for (let j = 0; j < 25; j++) {
//                                 subName = resp[j].subreddit.display_name
//                                 postTitle = resp[j].title
//                                 link = resp[j].permalink

//                                 // console.log(subId)
//                                 var subId = resp[j].id
//                                 // console.log(resp[0])
//                                 // console.log(resp[j].title, subId)
//                                 var postInfo = {
//                                         subName: subName,
//                                         postTitle: postTitle,
//                                         link: link,
//                                         redditComments: [],
//                                         subId: subId
//                                 }
//                                 console.log(subId, 'outside')
//                                 r.getSubmission(subId).comments.then(resp => {
//                                         console.log(subId)
//                                         // console.log(resp.length)
//                                         // for (let i = 0; i < 25; i++) {
//                                         //         if (resp[i] !== undefined) {
//                                         //                 itetator++
//                                         var newComment = resp[0].body

//                                         //                 // console.log(itetator, subId, newComment.length)

//                                         postInfo.redditComments.push(newComment)
//                                         //                 // console.log(postInfo.redditComments.length)

//                                         //         }

//                                         //         // console.log(redditHot.length)



//                                         // }
//                                         // console.log(redditHot)
//                                         // console.log(postInfo.redditComments.length)

//                                         if (postInfo.redditComments.length === 25) {
//                                                 redditHot.push(postInfo)
//                                                 if(redditHot.length===1){

//                                                         res.status(200).send(redditHot)
//                                                 }
//                                         }
//                                 })
                                
//                                 // if (redditHot.length === 1) {
//                                 //         res.status(200).send(redditHot)
//                                 // }



//                         }

//                 })

// })








// app.get('/api/test', ctrl.get)



// app.listen(SERVER_PORT, () => {
//         console.log(`Listening on port: ${SERVER_PORT}`);
// })