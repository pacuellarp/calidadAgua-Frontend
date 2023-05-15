import axios from 'axios'


export default axios.create({
  baseURL : 'https://calidadagua-back-production.up.railway.app/api'
})