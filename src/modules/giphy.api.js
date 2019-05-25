import axios from 'axios';

// const apiKey = `7ZwWTt5sknqrGDR86JBUDEJoYZIP1ANj`;
// const apiHost = 'api.giphy.com';
// const apiPath = '/v1/gifs/search';
// const searchUrl = `https://${apiHost}${apiPath}?api_key=${apiKey}&q=the office`;

const getGiphyOffice = () => {
    return axios.get('/api/giphy/office')
            .then((response) => {
                console.log('giphy the office:', response);
                return response;
            });
}

const getNewSearch = (searchString) => {
    return axios.get(`/api/giphy/?search=${searchString}`)
        .then((response) => {
            console.log('giphy search:', response);
            return response;
        });
}

export {
    getGiphyOffice,
    getNewSearch,
}
