import axios from 'axios';

const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        // Server side
        return axios.create({
            baseURL: 'https://ticketing.soffredi.org',
            headers: req.headers,
        });
    } else {
        // Server side
        return axios.create();
    }
};

export default buildClient;
