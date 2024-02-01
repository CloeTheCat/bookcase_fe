import axios from 'axios';

export const addBookAgain = async (id_userlibrary) => {
    const endpointUrl = `http://127.0.0.1:8080/addbookagain/${id_userlibrary}`;

    const res = await axios({
        method: 'patch',
        url: endpointUrl,
    }).catch(err => { return err.response });

    return res;
};
