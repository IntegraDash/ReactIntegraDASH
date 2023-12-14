import axios from "../../node_modules/axios/index"

const api = axios.create({
    baseURL: "http://localhost:8080/",
})

export default api