import { Button, makeStyles } from '@material-ui/core';

import React,{useState, useMemo} from 'react';

import './card.css';

import { useDispatch, useSelector } from 'react-redux';
import { FETCH_COMPANY } from '../../redux/types';

import {IconHeader} from '../Img/iconHeader'
import { ModalWindow } from '../Modal/Modal';

import { handleDifferense } from '../../utils/percent';





export const Card = ({card}) =>{
    
    const classes = useStyles();
    
    const [open,setOpen] = useState(false)
    const handleClickOpen =()=>{
        setOpen((open)=>!open)
    }

    const {promotions,dividends} = useSelector((state)=>state);

    const dispatch = useDispatch()
    const getDetails = ()=>{
    handleClickOpen()
       dispatch({type:FETCH_COMPANY,payload:nameCompany})
   }

   




    let nameCompany = card.securities.data[0][1] === "SBCBA"? "SBER":card.securities.data[0][1];  
    const data = useMemo(()=> createDataInform(promotions, nameCompany), [promotions, nameCompany]) 

    return(
        
        <div>
            
            <ModalWindow    dividends={dividends} 
                            classes={classes}
                            nameCompany={nameCompany}
                            open={open}
                            promotions={promotions}
                            data={data}
                            handleClickOpen={handleClickOpen}
            />
  
        <div className="card"  >
            <header>
                <IconHeader nameCompany={nameCompany}/>
            </header>
            
                <p>название: <strong>{nameCompany}</strong></p>
                    <p>ID: {card.securities.data[0][0]} </p>
                    <p>secid: {card.securities.data[0][1]}</p>
                    
                    ​​​​
                   <p>regnumber: {card.securities.data[0][3]}</p>
                   
                   <p>ИНН: {card.securities.data[0][9]}</p>
                   <p>gosreg: {card.securities.data[0][11]}</p>
              
                <Button color="primary" 
                        className={classes.btn}
                        onClick={getDetails}
                  >
                        Подробнее
                </Button>           
        </div>
        </div>
    )
}


const createDataInform = (promotions, nameCompany) =>{

    const data = []

        for(let i = 0; i<promotions.length; i++){

            data.push({ 
                tradeDate : promotions[i].TRADEDATE,
                [nameCompany]  : handleDifferense(promotions[i].OPEN,promotions[i].CLOSE)
            })

            
        }
        
return data

}

const useStyles = makeStyles({
    modal: {
     display:'block',
     height:'90%',
      overflow:'scroll'
    },
    
    wrapper:{
        display:'grid',
        'grid-template-columns':'1fr 1fr',
        'grid-template-rows':'300px 50%',
        'grid-column-gap':'3%'
    },
    cost:{
        'grid-column':2,
        'grid-row':2
    },
    table:{
        'grid-column':1/2,
        'grid-row':1/3
    },
    
    btn:{
        width:'100%',
        height:70
    },
    btnClose:{
        color: '#E87866',
        cursor:'pointer',
        height:'7%',
        width:'7%',
        position:'fixed',
        top:'3%',
        right:'1%'
    }

  });
