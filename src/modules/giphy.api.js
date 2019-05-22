import axios from 'axios';

const apiKey = `7ZwWTt5sknqrGDR86JBUDEJoYZIP1ANj`;
const apiHost = 'api.giphy.com';
const apiPath = '/v1/gifs/search';
const searchUrl = `https://${apiHost}${apiPath}?api_key=${apiKey}&q=the office`;

const getGiphyOffice = () => {
    return axios.get(searchUrl)
            .then((response) => {
                console.log('giphy the offic', response);
                return response;
            });
}

const getNewSearch = (searchString) => {
    const gifUrl = `https://${apiHost}${apiPath}?api_key=${apiKey}&q=${searchString}`;
    return axios.get(gifUrl)
        .then((response) => {
            console.log('giphy the offic', response);
            return response;
        });
}

export {
    getGiphyOffice,
    getNewSearch,
}
