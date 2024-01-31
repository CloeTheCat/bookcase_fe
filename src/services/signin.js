import axios from 'axios';

export const signin = async (userData) => {
    const endpointUrl = `http://127.0.0.1:8080/signin`;

    const res = await axios({
        method: 'post',
        url: endpointUrl,
        data: userData,
    }).catch(err => {return err.response});

    return res;
};