import React from 'react';


import Mts from '../../assets/logo/mts.png'
import Sber from '../../assets/logo/sber.png'
import Yndx from '../../assets/logo/yndx.jpg'

export const IconHeader = ({nameCompany}) =>{
    if(nameCompany === "YNDX"){
        return(
            <img src={Yndx}
             alt="Logo"
        />
        )
    }
    else if(nameCompany === "MTSS"){
        return(
            <img src={Mts}
             alt="Logo"
        />
        )
    }
    else if(nameCompany === "SBER"){
        
        return(
            <img src={Sber}
             alt="Logo"
        />
        )
    }
}