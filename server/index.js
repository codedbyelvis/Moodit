require('dotenv').config()
const express =  require('express'),
      bodyParser = require('body-parser'),
      ctrl = require('./controllers/controllers'),
      snoowrap = require('snoowrap');



const {
    SERVER_PORT,
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN,
    USER_AGENT
} = process.env;

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



app.get('/api/test', ctrl.get)



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})