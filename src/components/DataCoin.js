/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { useParams } from 'react-router';
import { Box } from '@material-ui/core';
import ComponentAppBar from './ComponentAppBar';
import useData from '../hooks/useData';

const DataCoin = () => {
  const chartRef = React.createRef();
  const { name } = useParams();
  const transactions = useData(name);
  const [chart, setChart] = useState();
  console.log(transactions);

  const label = useCallback(() => {
    const labels = transactions.map((order) => (
      order[1].type
    ));
    const unique = [...new Set(labels)];
    console.log(unique);
    return unique;
  }, [transactions]);

  const datas = useCallback(() => {
    const labels = [];
    const values = [];
    transactions.map((order) => (
      labels.push((order[1]).type)
    ));
    const unique = [...new Set(labels)];
    // eslint-disable-next-line no-undef
    unique.map((uni) => (
      values.push(labels.filter((x) => x === uni).length)
    ));
    const quantidadeElementos = labels.filter((x) => x === unique).length;
    console.log(values);
    return values;
  }, [transactions]);

  useEffect(() => {
    const chartAux = new Chart(chartRef.current?.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: `Coin ${name}`,
            data: [],
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

    setChart(chartAux);
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data.labels = label();
      chart.data.datasets[0].data = datas();
      chart.update();
    }
  }, [label, datas, chart]);

  return (
    <div>
      <Box p={{ md: 8 }}>
        <canvas id="chart-line" ref={chartRef} p={{ md: 8 }} />
      </Box>
    </div>
  );
};
export default DataCoin;
