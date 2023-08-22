import axios from 'axios'


export default axios.create({
  baseURL : 'https://sensores.up.railway.app/api'
  //baseURL : 'http://localhost:8000/api'
})