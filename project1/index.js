const apiCall = require('./apiCall');

const promise = apiCall();

promise.then(data => {
    console.log(data);
});