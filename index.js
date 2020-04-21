const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

mongoose.connect('mongodb+srv://test:mydigitalschool@cluster0-ovsdc.gcp.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
  .then(result => {
    app.listen(port);
    console.log('Your first node api is running on port: ' + port);
  })
  .catch(err => console.log(err));

 

module.exports = app;