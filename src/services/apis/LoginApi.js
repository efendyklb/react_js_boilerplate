
import ApiConfig from "./ApiConfig"
import axios from "axios";

const groupUrl = "login";

class LoginApi {
    static login = json => axios.post(`/${groupUrl}`, json, ApiConfig)
}

export default LoginApi;