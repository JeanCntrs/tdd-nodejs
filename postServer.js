const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares');
const app = express();
const port = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const postsHandlers = posts({ axios });

app.post('/', authenticate, postsHandlers.post)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})