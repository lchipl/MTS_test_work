import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    fontSize:10,
    maxWidth: 450,
    marginLeft:'7%'
  },
});


export  const  Promotions = ({promotions,data,nameCompany}) => {
  const classes = useStyles();
  const promTable = promotions.slice().reverse()
  const actualData = data.slice().reverse()
  

  return (
      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Неделя</strong></TableCell>
            <TableCell align="center"><strong>Открыто</strong></TableCell>
            <TableCell align="center"><strong>Закрыто</strong></TableCell>
            <TableCell align="center"><strong>Изменение %</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promTable.map((promotion,i) => (
            <TableRow >
              
              <TableCell align="center">{promotion.TRADEDATE}</TableCell> 
              <TableCell align="center">{promotion.OPEN}</TableCell>
              <TableCell align="center">{promotion.CLOSE}</TableCell>
              <TableCell align="center">{actualData[i][nameCompany]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
}
