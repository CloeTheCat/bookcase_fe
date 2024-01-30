import axios from 'axios';

export const newBook = async (bookData) => {
    const endpointUrl = 'http://127.0.0.1:8080/books/';

    const res = await axios({
        method: 'post',
        url: endpointUrl,
        data: bookData,
    }).catch(err => {return err.response});

    return res;
};
