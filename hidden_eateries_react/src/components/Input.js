import React, {Component} from 'react';



class Input extends Component{
        constructor(props){
            super(props)
        }
    
    handleOnPost = (e) => {
        let date = new Date();
        let currentDate = date.toDateString();
        let currentTime = date.toLocaleTimeString();
        console.log('handleOnPost is working');
        e.preventDefault();
        this.props.createComment(this.refs.createName.value, this.refs.createText.value, this.props.inputId, currentDate, currentTime);
        this.refs.createName.value = '';
        this.refs.createText.value = '';
    }
    
       
       render(){
           return(
                <div className="input-section">
                    <form onSubmit={this.handleOnPost}>
                        <div className="center">
                            <input type="text" className="name-field" placeholder="User Name" ref="createName" />
                        </div>
                        <div className="center c-text">
                             <textarea type="text" className="text-field" placeholder="Your Comment" ref="createText" />
                        </div>
                        <div className="center c-post">
                            <button className="center post-btn">Post</button>
                        </div>
                    </form>
                </div>
            )    
       }
       
}

export default Input;