import axios from 'axios';

const API_URL='https://f3-api.jaqk.in'
axios.defaults.withCredentials = true; 


export const GameaccessToken =()=>{
    return axios.
    get(`${API_URL}/api/token`,{}).
    then (response=>{
      return response.data
    }).catch(err=>{
      console.log(err)
    })
  };

  export const Getdata=()=>{
      
    return	axios.
    get(`${API_URL}/api/profile`).
    then(res=>{
      
      return res.data;
    }).catch(err=>{
      console.log('error',err)
    })
   
    
   
  };