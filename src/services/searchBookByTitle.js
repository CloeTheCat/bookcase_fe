import axios from 'axios';

export const searchBookByTitle = async (searchedText) => {
    const endpointUrl = `http://127.0.0.1:8080/searchbooks/${searchedText}`;

    const res = await axios({
        method: 'get',
        url: endpointUrl,
    }).catch(err => { return err.response });

    return res;
};
