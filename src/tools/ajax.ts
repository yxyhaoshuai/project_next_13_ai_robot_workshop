import axios from "axios";
import {message} from "antd"
import {BaseURL} from "@/config/serverConfig";

axios.defaults.baseURL = BaseURL

export default function ajax(url:string, data:object={}, method:string ="get") {
    return new Promise((resolve, reject)=>{
        if (method.toLowerCase() === "get") {
            axios.get(url, {
                params: data
            }).then(resp=>{
                resolve(resp.data)
            }).catch(error=>{
                message.warn("网络出现问题: " + error.message)
            })
        } else if (method.toLowerCase() === "post") {
            axios.post(url, data).then(resp=>{
                resolve(resp.data)
            }).catch(error=>{
                message.warn("网络出现问题: " + error.message)
            })
        }
    })

}