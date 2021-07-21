/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (name) => {
  const [enteredLoanOrders, setLoanOrders] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://poloniex.com/public?command=returnTradeHistory&currencyPair=${name}`,
      )
      .then((res) => {
        console.log(res.data);
        setLoanOrders(Object.entries(res.data));
      });
  }, [name]);
  console.log(enteredLoanOrders);
  return enteredLoanOrders;
};

export default useData;
