import axios from 'axios';

export const getBookData = async (idData) => {
    const endpointUrl = `http://127.0.0.1:8080/bookData`;

    const res = await axios({
        method: 'get',
        url: endpointUrl,
        params: idData
    }).catch(err => { return err.response });

    return res;
};