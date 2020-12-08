
import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../components/Cards/Cards';
import { FETCH_COMPANIES } from '../redux/types';

import './main.css'

export const Main = () =>{
    const dispatch = useDispatch()
    const {companies} = useSelector((state)=>state);

    useEffect(()=>{
        dispatch({type:FETCH_COMPANIES})
    },[])

    
        
    
    return(
        <div className="main">
           
        <Cards dispatch={dispatch} companies={companies}/>
        </div>
    )
}