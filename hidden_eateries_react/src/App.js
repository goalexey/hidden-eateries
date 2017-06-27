import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Boroughs from './components/Boroughs';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer.js';
import axios from 'axios';

const boroughs = {
  bronx: 1,
  brooklyn: 2,
  manhattan: 3,
  queens: 4,
  si: 5
}



// let foodData;

// APP COMPONENT
class App extends Component {

	constructor(props) {
    	super(props)
        this.state = {
          fooddata: []
        } 
    }
    
    /*componentDidMount(){
      axios.get('https://hiddeneats.herokuapp.com/')
      .then((res) => {
        this.setState({
          fooddata: res.data.data,
        })
      }) 
    }*/
    
    displayRestaurants = (e) => {
      let currentId = boroughs[e.target.id];
      let currentData;
      let filteredArr = [];
      
      axios.get('https://hiddeneateries.herokuapp.com/')
      // axios.get('https://localhost:3000')
      .then((res) => {
        currentData = res.data.data;
        currentData.forEach(function(e){
          if(currentId === e.borough_id){
            filteredArr.push(e);
          }
        })
        this.setState({
          fooddata: filteredArr
        })
      })
    };


  render() {
    return (
      <div className="App">
        <Header />
        <RestaurantList foodData={this.state.fooddata} display={this.displayRestaurants}  />
        <Footer />
        <div className="overlay"></div>
      </div>
    );
  }
}

export default App;
