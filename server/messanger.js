const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

const url = 'mongodb://localhost:27017';
// const url = 'mongodb://heroku_46bh5m94:bd84pnvhi2b71538d2vehja60m@ds241278.mlab.com:41278/heroku_46bh5m94';
const mongoClient = new MongoClient(url);

mongoClient.connect((err) => {
    if (err) console.log(err);
    const db = mongoClient.db('Chat-App');

    const app = express();
    app.use(bodyParser.json());
    
    app.post('/messanger/postMessage', (req, res) => {
        db.collection('messages').insertOne(req.body)
            .then(() => console.log('db insert worked'))
            .catch((e) => console.log(e))

            //publish new message data to the websocket with redis: 
            client.publish('chatChannel', JSON.stringify({
                "type" : "messageType",
                "payload" : req.body}));
       res.send('message posted');
    });

    app.get('/messanger/clearMessages', (req, res) => {
      db.collection('messages').deleteMany({ })
          .then(() => console.log('db clear worked'))
          .catch((e) => console.log(e))
     res.send('messages cleared.');
  });

    app.get('/messanger/getMessages', (req, res) => {
        db.collection('messages').find({}).toArray()
        .then((docs) => {
          res.send(docs);
        })
        .catch((e) => {
          res.send('Error: ' + e);
        })
    });
    
    app.post('/messanger/postUser', (req, res) => {
      db.collection('users').insertOne(req.body)
          .then()
          .catch((e) => console.log(e))
          
       //publishes new user data to the websocket with redis: 
       client.publish('chatChannel', JSON.stringify({
        "type" : "userType",
        "payload" : req.body }));
     res.send('User posted');
  });

  app.get('/messanger/getUsers', (req, res) => {
      db.collection('users').find({}).toArray()
      .then((docs) => {
        res.send(docs);
      })
      .catch((e) => {
        res.send('Error: ' + e);
      })
  });

  app.post('/messanger/deleteUser', (req, res) => {
    db.collection('users').findOneAndDelete({username: req.body.username})
    .then((docs) => {
      res.send(docs);
    })
    .catch((e) => {
      res.send('Error: ' + e);
    })
});

app.get('/messanger/clearUsers', (req, res) => {
  db.collection('users').deleteMany({})
      .then(() => console.log('db user clear worked'))
      .catch((e) => console.log(e))
 res.send('users cleared.');
});

 app.post('/messanger/verifyUser', (req, res) => {
  db.collection('users').findOne({"username": req.body.username})
  .then((docs) => {
    res.send(!docs);
  })
  .catch((e) => {
    res.send('Error: ' + e);
  })
});

    app.listen(5000);
});


