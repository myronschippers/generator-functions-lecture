const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = `7ZwWTt5sknqrGDR86JBUDEJoYZIP1ANj`;
const apiHost = 'api.giphy.com';
const apiPath = '/v1/gifs/search';

router.get('/office', (req, res) => {
    const searchUrl = `https://${apiHost}${apiPath}?api_key=${apiKey}&q=the office`;
    axios.get('/api/giphy/office')
            .then((response) => {
                console.log('giphy the office:', response);
                res.send(response);
            });
});

// ?search=____
router.get('/', (req, res) => {
    const searchString = req.query.search;
    const gifUrl = `https://${apiHost}${apiPath}?api_key=${apiKey}&q=${searchString}`;
    axios.get(gifUrl)
        .then((response) => {
            console.log('giphy the offic', response);
            res.send(response);
        })
        .catch((err) => {
            console.log('err', err);
            res.sendStatus(500);
        });

});

module.exports = router;