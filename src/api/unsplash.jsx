import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c49eee43a0a941f7c94ac10714b13aac10779a5b7c1332dddc2b88564418bf4e'
    }
})