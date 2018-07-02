const axiosDefault = {
    baseURL: 'http://slka.local/api/v1',
    validateStatus: function (status) {
        return status < 500; // pass all http code status and handling by self
    },
    timeout: 3000,
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    /*
        params: null,
        data: {},
        auth: {
            username: 'janedoe',
            password: 's00pers3cret'
        },
    */
}

export default axiosDefault;
