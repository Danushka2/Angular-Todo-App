const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    const posts = [
        { 
            id: 2,
            title: 'server posts 2 working' 
        },
        { 
            id: 3, 
            title: 'server posts 3 working' 
        },
        { 
            id: 1, 
            title: 'server posts 1 working' 
        },
    ]

    res.status(200).json({
        message: 'Post fetched successfully!',
        posts: posts
    });
});

module.exports = app;