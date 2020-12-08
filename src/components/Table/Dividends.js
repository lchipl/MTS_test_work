import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    fontSize:10
  },
});




export  const  Dividends = ({dividends}) => {
  const classes = useStyles();
  dividends.reverse()

  return (
      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Дата</strong></TableCell>
            <TableCell align="center"><strong>Значение дивиденда %</strong></TableCell>
            <TableCell align="center"><strong>Валюта?</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dividends.map((dividend) => (
            <TableRow >
              
              <TableCell align="center">{dividend.registryclosedate}</TableCell> 
              <TableCell align="center">{dividend.value}</TableCell>
              <TableCell align="center">{dividend.currencyid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
}
