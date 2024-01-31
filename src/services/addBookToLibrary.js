import axios from 'axios';

export const addBookToLibrary = async (userBookData) => {
    const endpointUrl = 'http://127.0.0.1:8080/userlibrarybook';

    const res = await axios({
        method: 'post',
        url: endpointUrl,
        data: userBookData,
    }).catch(err => {return err.response});

    return res;
};
