import axios from "axios";

const api = axios.create({
    baseURL: 'https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_ETH'
    
});
export default api;

/** 
state={
  coins: [],
}

async componentDidMount(){
  const responde = await api.get('');
 console.log(responde.data);
  this.setState({coins: responde.data});
}

*/