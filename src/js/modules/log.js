import axios from 'axios';

const log = () => {
    // Request API.
    axios
    .post('http://localhost:1337/api/auth/local', {
        identifier: 'user@strapi.io',
        password: 'strapiPassword',
    })
    .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
    });
}
export default log