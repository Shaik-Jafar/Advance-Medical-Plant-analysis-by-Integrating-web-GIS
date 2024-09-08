import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barline({ dataPoints }) {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Yearly Growth Rate"
    },
    axisY: {
      title: "Bounce Rate",
      //suffix: "%"
    },
    axisX: {
      title: "Week of Year",
      //prefix: "W",
      interval: 2
    },
    data: [
      {
        // type: "line",
        toolTipContent: "Year{x}: {y}%",
        dataPoints: dataPoints.map(dp => ({ x: dp.x, y: dp.y }))
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Barline;
