import React, {Component} from 'react';
import Restaurant from './Restaurant';
import Boroughs from './Boroughs';
import SingleRest from './SingleRest';
// import Map from './Map';


class RestaurantList extends Component{
        constructor(props){
            super(props)
        }

    // function to render a list of Restaurants after clicking on a Borough
    renderRestaurant = () => {
        let restList = [];
        for(let i = 0; i < this.props.foodData.length; i++){
            restList.push(<Restaurant image={this.props.foodData[i].image} name={this.props.foodData[i].name} cuisine={this.props.foodData[i].cuisine} address={this.props.foodData[i].address} key={this.props.foodData[i].idr} idr={this.props.foodData[i].idr} restData={this.props.foodData[i]} bID={this.props.foodData[i].borough_id}/>
            )
            
        }
        return restList;
    }

    render(){
        return(
        <div className="rest-render">
            <Boroughs onClick={this.props.display}/>
             
            {this.renderRestaurant()}
            
        </div>
        )
    }
    
}

export default RestaurantList;


/*possible solution for rendering Single Restaurant
1. have a state setup in Rest
*/