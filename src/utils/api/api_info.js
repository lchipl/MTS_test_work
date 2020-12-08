import axios from 'axios';

import {COMPANIES} from '../constants'

const _base_api = 'https://iss.moex.com/iss/securities.json?q='

export const MosApi =async () =>{

    const store= [];

    for(let i=0;i<COMPANIES.length;i++){

        
        const {data} = await axios.get(`${_base_api}${COMPANIES[i]}`)
        

        store.push(data)
    }


   return store
}