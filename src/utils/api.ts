import axios from "../../node_modules/axios/index"

const api = axios.create({
    baseURL: "http://localhost:3000/",
})

export default api