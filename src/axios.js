import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://messenger-live-clone.herokuapp.com/'
})

export default instance