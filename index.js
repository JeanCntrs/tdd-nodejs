const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
})

app.post('/', async (req, res) => {
    const { body } = req;
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);
    res.status(201).send(data);
});

app.put('/:id', async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    res.sendStatus(204);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})