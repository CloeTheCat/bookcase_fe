import axios from 'axios';

export const searchBookByTitle = async (searchData) => {
    const endpointUrl = `http://127.0.0.1:8080/searchbooks/`;

    const res = await axios({
        method: 'get',
        url: endpointUrl,
        params: searchData,
    }).catch(err => { return err.response });

    return res;
};
