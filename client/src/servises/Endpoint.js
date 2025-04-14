import axios from "axios"

const BaseUrl='http://localhost:3001'

const instance=axios.create({
    baseURL:BaseUrl,
    withCredentials:true
})

export const get=(url,params)=>instance.get(url,{params})
export const post=(url,data)=>instance.post(url,data)
export const put=(url,data)=>instance.put(url,data)
export const dele=(url)=>instance.delete(url)

export {BaseUrl}