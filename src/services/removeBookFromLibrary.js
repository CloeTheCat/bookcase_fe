import axios from 'axios';

export const removeBookFromLibrary = async (id_userlibrary) => {
    const endpointUrl = `http://127.0.0.1:8080/removebook/${id_userlibrary}`;

    const res = await axios({
        method: 'patch',
        url: endpointUrl,
    }).catch(err => { return err.response });

    return res;
};
