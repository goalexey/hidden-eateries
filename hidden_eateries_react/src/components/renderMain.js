import React from 'react';
import Header from './Header';
import Boroughs from './Boroughs';
import RestaurantList from './RestaurantList';
import Footer from './Footer.js';

function renderMain (props){
    return(

        <div>
        <Header />
        <RestaurantList foodData={this.state.fooddata} display={this.displayRestaurants}  />
        <Footer />
        <div className="overlay"></div>
        </div>
    )
}

export default renderMain;