import React from "react";
import { Component } from "react";
import api from "./api";

class ApiManager extends Component {

 
  state = {
    coins: [],
  };

  /**   componentDidMount() {
        fetch('https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_ETH')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }*/

  async componentDidMount() {
    const response = await api.get("");
    //console.log(Object.entries(response.data));
    this.setState({ coins: response.data });
  }

  render() {
    const { coins } = this.state;
    var newCoin = Object.entries(coins);
    var coinsValue = Object.values(newCoin);
    console.log(coinsValue);
    console.log(coinsValue[0]);

    /**  Object.keys(newCoin).forEach(function (item) {
      var teste1 = item + " - " + newCoin[item];
      console.log(teste1);
});*/

    return (
      <div>
        {coinsValue.map((coin) => (
          <li>
            <h2>
              <strong>Coin: </strong>
              {coin[0]}
            </h2>
            <p>
              Id:
              {coin[1].id}
            </p>
          </li>
        ))}
      </div>
    );
  }
}

export default ApiManager;
