const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');


//mongo init:
const url = 'mongodb://localhost:27018';
// const url = 'mongodb://heroku_46bh5m94:bd84pnvhi2b71538d2vehja60m@ds241278.mlab.com:41278/heroku_46bh5m94';
const mongoClient = new MongoClient(url);

mongoClient.connect((err) => {
    if (err) console.log(err);
    const db = mongoClient.db('Chat-App');

    // move app logic in here
    const app = express();
    app.use(bodyParser.json());
    
    //same as a get endpoint, but says post instead. 
    app.post('/users/postUser', (req, res) => {
        console.log(req.body);
        db.collection('users').insertOne(req.body)
            .then(() => console.log('user insert worked'))
            .catch((e) => console.log(e))
       res.send('doesnt matter');
    });


     //same as a get endpoint, but says post instead. 
    app.get('/users/getUsers', (req, res) => {
        db.collection('users').find({}).toArray()
        .then((docs) => {
          console.log(docs)
          res.send(docs);
        })
        .catch((e) => {
          res.send('Error: ' + e);
        })
    });
    
    app.listen(7000);
    //end app logic 
});


