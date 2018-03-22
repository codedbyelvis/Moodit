require('dotenv').config()
const express =  require('express'),
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
console.log(WATSON_USERNAME, PASSWORD);

const app = express();
app.use(bodyParser.json());

// reddit api
const r = new snoowrap({
   userAgent: USER_AGENT,
   clientId: CLIENT_ID,
   clientSecret:  CLIENT_SECRET,
   refreshToken: REFRESH_TOKEN
});

app.post('/api/user', (req, res) => {
   console.log(req.body.user);
   r.getUser(req.body.user).getComments().then(cmt => { // any reddit user can be passed into getUser
       var userStr = ''
       for(let i = 0; i < cmt.length; i++){
           userStr += cmt[i].body + ' '
       }
       console.log(userStr);
   })
})
// r.getUser('testdevbot').getComments().then(cmt => { // any reddit user can be passed into getUser
//     var userStr = ''
//     for(let i = 0; i < cmt.length; i++){
//         userStr += cmt[i].body + ' '
//     } 
//     console.log(userStr);
// })

// -----Watson API-------

var myResponse = '';
r.getComment('dw27p8z').fetch().then(comment=>{
       myResponse = comment.body;
       // console.log(myResponse);


if(myResponse.length >0){
console.log(myResponse);

// The text that we want to analyze the tone of.
var text = myResponse

// Turn our text into valid json.
var input = { "text": text };

// The format that the tone analyzer needs. 
var params =
       {
       'tone_input': input,
       'content_type': 'application/json'
       };

// Initialize the Tone Analyzer by giving it our credentials.
var tone_analyzer = new ToneAnalyzerV3(
       {
       username: WATSON_USERNAME,
       password: PASSWORD,
       version_date: '2017-09-21'
       });

// Use our Tone Analyzer variable to analyze the tone.
tone_analyzer.tone(params, function(error, response)
       {
       // There's an error.
       if (error)
               {
               console.log('Error:', error);
               }
       // No error, we got our tone result.
       else
               {
               // The tone of the text, as determined by watson.
               var tone = JSON.stringify(response, null, 2)
               
               // Output Watson's tone analysis to the console.
               console.log("The tone analysis for \'" + text + "\' is:\n");
               console.log(tone);
               }
       });
} else {
       console.log(myResponse);
}})




app.get('/api/test', ctrl.get)



app.listen(SERVER_PORT, () => {
   console.log(`Listening on port: ${SERVER_PORT}`);
})