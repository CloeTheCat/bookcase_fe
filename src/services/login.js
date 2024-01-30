import axios from 'axios';

export const login = async () => {
    const endpointUrl = 'http://127.0.0.1:8080/users/';

    // const res = await axios({
    //     method: 'get',
    //     url: endpointUrl,
    // }).catch(err => {return err.response});

    axios.get(endpointUrl).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })

    // return res;
};
