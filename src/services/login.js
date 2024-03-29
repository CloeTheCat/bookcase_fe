import axios from 'axios';

export const login = async (email) => {
    const endpointUrl = `http://127.0.0.1:8080/login/${email}`;

    const res = await axios({
        method: 'get',
        url: endpointUrl,
    }).catch(err => {return err.response});

    return res;
};