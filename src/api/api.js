import axios from './index';

class ApiComponent {
    constructor() {}
    baseUri = '';
    post = async (url, obj = {}, base = true, credentials) => {
        try {
        const json = await axios.post(this.baseUri.concat(url), obj);
        return json.data;
        } catch (e) {
            throw new Error(e?.response?.data);
        }
    };
    put = async (url = '', obj = {}, base = true, headers) => {
        try {
            const json = await axios.put(this.baseUri.concat(url), obj);
            return json;
        } catch (e) {
            return e.response.data;
        }
    };
    get = async (url = '', base = true) => {
        const json = await axios.get(this.baseUri.concat(url));
        return json.data;
    };
    // Get test data
    get_system_info = async ()=> {
        return await this.get("/cgi-bin/get_system_info.cgi")
    }
}
const API = new ApiComponent();

export default API;
