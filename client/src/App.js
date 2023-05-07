import React, { Component } from 'react';
import { connect } from 'react-redux'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Success from './components/Success';
import Weather from './components/Weather';
import { setItems, setWeather } from './components/actions/cartActions';

class App extends Component {
  componentDidMount() { //Mounting the 2 api's on load
    this.callApi() // api to get everything from golfclub table in server.js 
      .then(res => this.props.setItems(res))
      .catch(err => console.log(err));

      this.callWeatherApi() //api to call the weather api
      .then(res => this.props.setWeather(res))
      .catch(err => console.log(err));

  }
  
  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  callWeatherApi = async () => {
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=33.7488%2C-84.3877',{
      method: 'GET',
      headers: {
              'X-RapidAPI-Key': '724734302dmsh3d9c52a8f296e1ep195230jsn34afece37c13',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
  }).then(res => {
      return res.json()
  })

  console.log("RESPONSE : "+JSON.stringify(response));


  return response;

  }

  // callGolfApi = async () => {
  //    const weatherResponse = fetch('https://weatherapi-com.p.rapidapi.com/current.json',{
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           name: 'User 1'
  //       })
  //   }).then(res => {
  //       return res.json()


  //   })
  //   .then(data => console.log(data))
  //   .catch(error => console.log('ERROR'))

  // }
  
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
              <Weather/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/success" component={Success}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
     setItems: data => dispatch(setItems(data)), // Set the action you created in your component props
     setWeather: data => dispatch(setWeather(data))
  }
}

export default connect(null,mapDispatchToProps)(App);
