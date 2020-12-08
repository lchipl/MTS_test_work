import React from "react"
import { Modal } from '@material-ui/core';
import { Promotions } from '../Promotions/Promotions';
import { Dividends } from '../Table/Dividends';
import Chart from '../Сhart/Сhart';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

export const ModalWindow = ({dividends, 
                            classes, 
                            nameCompany,
                            open,
                            data,
                            promotions,
                            handleClickOpen
                        }) =>{
return(
<Modal
        open={open}
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        
        >
            
            <div className={'modalCard '+ `${classes.modal}`}  >
            <div className={classes.wrapper}>

            
                
           
            <Dividends dividends={dividends}/>

            
            
            <CancelPresentationIcon color="primary" className={classes.btnClose} onClick={handleClickOpen} />
                     
            <Chart data={data} nameCompany={nameCompany}/>

            <div className={classes.cost}>
              <Promotions 
                promotions={promotions}
                data={data}
                nameCompany={nameCompany}
                />
            </div>
            
           </div>
            </div>

        </Modal>
)
}