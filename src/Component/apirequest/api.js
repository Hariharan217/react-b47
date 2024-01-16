
import axios from 'axios'

let api = axios.create({baseURL: "http://localhost:5001" })

export default api;