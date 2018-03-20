require('dotenv').config()
const express =  require('express'),
      bodyParser = require('body-parser'),
      ctrl = require('./controllers/controllers');



const {
    SERVER_PORT
} = process.env;

const app = express();
app.use(bodyParser.json());

app.get('api/test', ctrl.get)



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})