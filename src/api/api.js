import axios from './index';
class ApiComponent {
    constructor() {}
    baseUri = '';
    getBaseUrl = (base = true) => this.baseUri;
    // putData =async (value)=> {
    //     try {
    //         const prevJsonValue = await AsyncStorage.getItem('@Storage')
    //         let jsonValue = JSON.stringify(value)
    //         if (prevJsonValue) {
    //             jsonValue =JSON.stringify({...JSON.parse(prevJsonValue),...value})
    //         }
    //         await AsyncStorage.setItem(`@Storage`, jsonValue)
    //         return true
    //     } catch (e) {
    //         console.log("Error", e)
    //     }
    // }
    // getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@Storage')
    //         const resp = JSON.parse(jsonValue)
    //         if(resp) {
    //             this.refresh=resp.refresh
    //             this.access =resp.access
    //         }
    //         return jsonValue != null ? JSON.parse(jsonValue) : null;
    //     } catch(e) {
    //         // error reading value
    //     }
    // }
    // removeData = async ()=> {
    //     try{
    //         await AsyncStorage.clear();
    //     }catch(e) {
    //
    //     }
    // }
    // removeDataToken = async ()=> {
    //     try{
    //         await AsyncStorage.removeItem('@Storage')
    //     }catch(e) {
    //
    //     }
    // }     //
    // consoleError = (e: any) => {
    //     // console.log('API Error:', e);
    // };

    post = async (url, obj = {}, base = true, credentials, headers) => {
        try {
            const json = await axios.post(this.getBaseUrl(base).concat(url), obj);
            return json.data;
        } catch (e) {
            throw new Error(e?.response?.data);
    }
}
    put = async (url = '', obj = {}, base = true, headers) => {
        try {
            const json = await axios.put(this.getBaseUrl(base).concat(url), obj);
            return json;
        } catch (e) {
            return e.response.data;
        }
    }
    get = async (url = '', base = true) => {
        const json = await axios.get(this.getBaseUrl(base).concat(url));
        return json.data;
    }
    getSystemInfo = async ()=>{
        return await this.get('/cgi-bin/get_system_info.cgi')
    }
    getNetworkInfo = async ()=>{
        return await this.get('/cgi-bin/get_network_info.cgi')
    }
    updateNetworkInfo = async (data={})=>{
        return await this.post('/cgi-bin/set_network_conf.cgi',data)
    }
   //monitor.html
    monitor = async  ()=>{
        return await this.get('/cgi-bin/monitor.cgi')
    }
    //watchLog.html
    getKernelLog = async ()=>{
        return await this.get('/cgi-bin/get_watchdog_log.cgi')
    }
    clearLog = async ()=>{
        return await this.post('/cgi-bin/clear_watchdog_log.cgi',{})
    }
    //upgrade.html
    resetConf = async ()=>{
        return await  this.get('/cgi-bin/reset_conf.cgi')
    }
    submitRestoreExec = async ()=>{
        return await  this.get('/cgi-bin/kill_bmminer.cgi')
    }
    submitUpgradeExec = async ()=>{
        return await this.get('/cgi-bin/kill_bmminer.cgi')
    }
    // timezone.html
    getTimeZone = async ()=>{
        return await this.get('/cgi-bin/get_timezone.cgi')
    }


}
const API = new ApiComponent();

export default API;
