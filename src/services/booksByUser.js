import axios from 'axios';

export const booksByUser = async (id_user) => {
    const endpointUrl = `http://127.0.0.1:8080/userlibrary/${id_user}`;

    const res = await axios({
        method: 'get',
        url: endpointUrl,
    }).catch(err => {return err.response});

    return res;
};
