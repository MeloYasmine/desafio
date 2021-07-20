/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { useParams } from 'react-router';

const DataCoin = () => {
  const chartRef = React.createRef();
  const [chart, setChart] = useState();
  const { name } = useParams();
  const [enteredLoanOrders, setLoanOrders] = useState([]);

  const label = (data) => {
    const labels = [];
    data.map((order) => (
      labels.push((order[1]).type)
    ));
    const unique = [...new Set(labels)];
    console.log(unique);
    console.log(labels);
    return unique;
  };
  const datas = (data) => {
    const labels = [];
    const values = [];
    data.map((order) => (
      labels.push((order[1]).type)
    ));
    const unique = [...new Set(labels)];
    // eslint-disable-next-line no-undef
    unique.map((uni) => (
      values.push(labels.filter((x) => x === uni).length)
    ));
    const quantidadeElementos = labels.filter((x) => x === unique).length;
    // console.log(unique);
    // eslint-disable-next-line no-undef
    console.log(values);
    return values;
  };
  useEffect(() => {
    axios
      .get(
        `https://poloniex.com/public?command=returnTradeHistory&currencyPair=${name}`,
      )
      .then((res) => {
        setLoanOrders(Object.entries(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const charts = new Chart(chartRef.current?.getContext('2d'), {
      type: 'bar',
      data: {
        labels: label(enteredLoanOrders),
        datasets: [
          {
            label: `Coin ${name}`,
            data: datas(enteredLoanOrders),
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
      {label(enteredLoanOrders)}
      {datas(enteredLoanOrders)}
      <canvas id="chart-line" ref={chartRef} style={{ width: '100%' }} />
    </div>
  );
};
export default DataCoin;
