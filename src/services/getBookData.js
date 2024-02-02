import axios from 'axios';

export const getBookData = async (idData) => {
    const endpointUrl = `http://127.0.0.1:8080/bookData`;

    console.log('idData axios', idData);

    const res = await axios({
        method: 'get',
        url: endpointUrl,
        // data: idData,
        params: idData
    }).catch(err => { return err.response });

    return res;
};