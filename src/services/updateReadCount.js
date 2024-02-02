import axios from 'axios';

export const updateReadCount = async (bookData) => {
    const endpointUrl = `http://127.0.0.1:8080/updatereadcount`;

    const res = await axios({
        method: 'patch',
        url: endpointUrl,
        data: bookData
    }).catch(err => { return err.response });

    return res;
};
