import React from 'react';
import { Card } from '../Card/Card';

import './cards.css'


export const Cards = ({companies})=>{
    return(
        companies.map((card)=> <Card key={card.securities.data[0][0]} card={card} /> )
    )
}