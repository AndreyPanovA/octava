import React from "react"
import Form from "../../../componets/form/form";
import useNetwork from "../../../hook/useNetwork";
import API from "../../../api/api";
const FORM_CONFIG = {
    fields:[
        {title:"Статус", id:"net-status"},
        {title:"Хост", id:"net-host"},
        {title:"Протокол",  id:"net-protocol"},
        {title:"IP Адрес", id:"net-address"},
        {title:"Маска сети", id:"net-mask"},
        {title:"Шлюз", id:"net-gateway"},
        {title:"DNS Серверы", id:"net-dns"},
    ],
    mook: {
        "net-status":"Статус"
    }
}
const Settings = ()=>{
    const [data] = useNetwork(API.getNetworkInfo)
    return (
        <div>
            <Form data={data}/>
        </div>
    )
}
export default Settings
