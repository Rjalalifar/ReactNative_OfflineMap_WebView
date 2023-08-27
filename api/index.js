import axios from "axios";

const url = "http://192.168.227.1:8099/api/v1";

axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    get: axios.get,
    post: axios.post,
    url,
};
