import axios from 'axios'


export default axios.create({
  baseURL : 'https://aquality-server-production.up.railway.app/api'
})