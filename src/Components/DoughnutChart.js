import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoughnutChart = ({ doughnet, doughnet2 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    const ctx = chartRef.current.getContext('2d');

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [doughnet, doughnet2],
            backgroundColor: ['#FF4500', '#39D5D8'],
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          labels: {
            render: 'value',
            fontColor: 'white',
            fontSize: 14,
          },
        },
      },
      plugins: [{
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const dataset = chart.config.data.datasets[0];
          const meta = chart.getDatasetMeta(0);

          meta.data.forEach((element, index) => {
            const model = element._model;

            if (model) {
              const text = dataset.data[index].toString();
              const textX = model.x;
              const textY = model.y;

              ctx.fillStyle = 'white';
              ctx.font = 'bold 14px Arial';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.fillText(text, textX, textY);
            }
          });

          // Display doughnet and doughnet2 values above the canvas
          // ctx.fillStyle = 'white';
          // ctx.font = 'bold 14px Arial';
          // ctx.textAlign = 'center';
          // ctx.textBaseline = 'middle';
          // ctx.fillText(`${doughnet}`, chart.width / 2, 20);
          // ctx.fillText(`${doughnet2}`, chart.width / 2, 40);
        },
      }],
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [doughnet, doughnet2]);

  return (
    <div className='doughnut-chart-container'>
      <canvas ref={chartRef} className='' aria-label="chart" height="300" width="300"></canvas>
    </div>
  );
};

export default DoughnutChart;

