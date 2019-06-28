
const superagent = require('superagent');
const axios = require('axios');

// const API_ROOT = 'http://45.76.75.242/api';
const API_ROOT = 'http://localhost:8088';

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    del: url =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`).send(body).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`).send(body).then(responseBody),
    axios_post:
        (url,body)=>
            axios({
                method:'post',
                url:url,
                data:body
            }).then(responseBody)

};

const Auth = {
    login: (username, password) => 
        requests.post('/users/login', { user: { username, password }}),
    register: (username, email, password) =>
        requests.post('/users', { user: { username, email, password }}),
    getUser: id =>
        requests.post('/users/get', {user:{id}}),
    save: user => 
        requests.put('/users', { user })
}

const Profile = {
    get: (id, username) =>
        requests.post('/profiles', { user1:{id}, user2:{username} })
}

const Commodity = {
    search: (text,platform) =>
        requests.post('/commodity/search',{query:text,website:platform}),
    // requests.axios_post(`${API_ROOT}/commodity/search`,{query:text,website:platform}),
    mail: (mail) =>
        requests.post('/mail',mail)
};

const Articles = {
    all: () => 
        requests.get(`/articles/get?*`),
    del: articleId =>
        requests.del(`/articles?articleid=${articleId}`),
    get: articleId =>
        requests.get(`/articles/get?articleid=${articleId}`),
    new: (id, article) =>
        requests.post(`/articles`, { user:{id}, article }),
    update: (article) => 
        requests.put(`/articles`,{article}),
    getTags: () =>
        requests.get(`/tags`),
    getByTag: (tag) => 
        requests.get(`/articles/get?tag=${tag}`)
        
};

export default {
    Articles,
    Auth,
    Profile,
    Commodity
}