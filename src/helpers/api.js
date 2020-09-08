import axios from 'axios';
import AuthToken from 'helpers/AuthToken';

const api = axios.create({
    baseURL: process.env.API,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
            get Authorization() {
                return AuthToken.isAvailable ? AuthToken.toHeader : null;
            },
            set Authorization(v) {
                AuthToken.tokenStorageValue = v;
            },
        },
    },
});

export default api;
