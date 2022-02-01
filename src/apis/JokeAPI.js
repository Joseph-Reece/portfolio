import axios from 'axios';

axios.defaults.baseURL = 'https://v2.jokeapi.dev/';

// get random joke
export const getRandomJoke = () => {
    return axios.get('/joke/Any')
} 

// get two part joke
export const getTwoPartJoke = () => {
    return axios.get('/joke/Any?type=twopart&safe-mode=true')
}
