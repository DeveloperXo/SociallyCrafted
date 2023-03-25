import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Revenue() {
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Revenue" 
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0.00",
            dataPoints: [
                { x: new Date("2022-01-01"), y: 60 },
                { x: new Date("2022-02-25"), y: 62 },
                { x: new Date("2022-03-25"), y: 64 },
                { x: new Date("2022-04-25"), y: 61 },
                { x:  new Date("2022-05-25"), y: 64 },
                { x:new Date("2022-06-25"), y: 62 },
                { x: new Date("2022-07-25"), y: 64 },
                { x: new Date("2022-08-25"), y: 60 },
                { x:new Date("2022-09-25"), y: 58 },
                { x: new Date("2022-10-25"), y: 59 },
                { x: new Date("2022-11-25"), y: 70},
                { x: new Date("2022-12-25"), y: 77}
            ]
        }]
    }
    
    
  return (
    <div style={{margin:"20px", padding:"30px", "z-index": "-1"}}>
        <CanvasJSChart options = {options} style={{ position:"absolute","z-index": "-1" }}
			/>
    </div>
  )
}

export default Revenue