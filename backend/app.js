const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Post = require('./models/post');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://Danushka:1Za7cxQuC2L3Mjlb@clustertest-ldueo.mongodb.net/test-node?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to the database');
  })
  .catch(() => {
    console.log('connection failed');
  });

//1Za7cxQuC2L3Mjlb

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: 'testing mongo'
  });
  console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  })
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});



app.use('/api/posts', (req, res, next) => {
  let posts;

  Post.find().then( documents => {
    console.log(documents);
    posts = documents;
  })

     

    res.status(200).json({
        message: 'Post fetched successfully!',
        posts: posts
    });
});


module.exports = app;