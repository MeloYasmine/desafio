import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [nameCoin, setNameCoin] = useState({ nameCoin: "" });
  const [results, setResults] = useState({
    Coin: "",
    Id: "",
    Last: "",
    LowestAsk: "",
    HighesBid: "",
    PercentChange: "",
    BaseVolume: "",
    isFrozen: "",
  });

  const getResults = () => {
    axios
      .get(
        "https://poloniex.com/public?command=returnTradeHistory&currencyPair=" + nameCoin
      )
      .then((response) => {
    var v = Object.entries(response.data);
      // var value = Object.values(response.dat);
        console.log(v);
        setResults(v);
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
        placeholder="Coin"
      />
      <button onClick={getResults}>Search</button>

      <ul>

        <li>Amount: {results[1].amount}</li>
        <li>Date: {results[1].date}</li>
        <li>rate: {results[1].rate}</li>

      </ul>
    </>
  );
}
