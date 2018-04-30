import axios from 'axios';

export function getGithubProfileInfo(value, callback) {
    const url = (`https://api.github.com/users/${value}`).replace(/\{.+\}/g, '');
axios.get(url)
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
        callback(`Got error: ${error}`);
        console.log(`Got error: ${error}`);
    });
}
