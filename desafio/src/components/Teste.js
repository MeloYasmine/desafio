/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { useParams } from 'react-router';
/* eslint-disable react/react-in-jsx-scope */
const Teste = () => {
  const chartRef = React.createRef();
  const [chart, setChart] = useState();
  const { name } = useParams();
  const [enteredLoanOrders, setLoanOrders] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://poloniex.com/public?command=returnTradeHistory&currencyPair=${name}`,
      )
      .then((res) => {
        setLoanOrders(Object.entries(res.data));
        console.log(enteredLoanOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const charts = new Chart(chartRef.current?.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    setChart(charts);
  }, []);

  return (
    <div>
      {enteredLoanOrders.map((order) => console.log((order[1]).type))}
      ;
      <canvas id="chart-line" ref={chartRef} style={{ width: '100%' }} />
    </div>

  );
};
export default Teste;
