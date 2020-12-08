import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Chart extends PureComponent {

 
  render() {
    
     return (
      <LineChart
        width={600}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='tradeDate' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={this.props.nameCompany} stroke="#8884d8" activeDot={{ r: 9}} />
        
      </LineChart>
    );
  }
}
