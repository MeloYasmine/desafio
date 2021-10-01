import React, { useState } from 'react';
import axios from 'axios';

function SearchCoin() {
  const [nameCoin, setNameCoin] = useState({ nameCoin: '' });
  const [results, setResults] = useState({
    Coin: '',
    date: '',
    amount: '',
    rate: '',
  });

  const getResults = () => {
    axios
      .get(
        `https://poloniex.com/public?command=returnTradeHistory&currencyPair=, ${nameCoin}`,
      )
      .then((response) => {
        const v = Object.entries(response.data);
        // var value = Object.values(response.dat);

        setResults(v);
        console.log(results);
      });
  };

  const handlingCoin = (e) => {
    setNameCoin(e.target.value);
  };

  return (
    <>
      <h1>Name Coin</h1>
      <input
        type="text"
        onChange={(e) => {
          handlingCoin(e);
        }}
        placeholder="text"
      />
      <button type="button" onClick={getResults}>Search </button>
    </>
  );
}

export default SearchCoin;
