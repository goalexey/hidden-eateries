import React, {Component} from 'react';


class Boroughs extends Component{
    constructor(props){
        super(props)
    }
    
    
    render(){
       return(
            <div className="br-container">
                <div className="borough-container">
                    <div className="borough-div" id="bronx" onClick={this.props.onClick}>Bronx</div>
                    <div className="borough-div" id="manhattan" onClick={this.props.onClick}>Manhattan</div>
                    <div className="borough-div" id="brooklyn" onClick={this.props.onClick}>Brooklyn</div>
                    <div className="borough-div" id="queens" onClick={this.props.onClick}>Queens</div>
                    <div className="borough-div" id="si" onClick={this.props.onClick}>Staten Island</div>
                </div>
                <div>
                </div>
            </div>
        ) 
    }
    
}

export default Boroughs;