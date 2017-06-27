import React, {Component} from 'react';
import axios from 'axios';
import CommentFeed from './CommentFeed';
import Input from './Input';
/*import Map from './Map';*/

class SingleRest extends Component{
        constructor(props){
            super(props)
            
            this.state = {
                comments: []
            }
        }
        
        componentDidMount(){
            axios.get('https://hiddeneateries.herokuapp.com/comments')
            .then((res) => {
                let commentList = [];
                res.data.data.forEach((el) => {
                   if(this.props.m_id === el.restaurant_id){
                        commentList.push(el);
                   } 
                })
                this.setState({
                comments: commentList,
                })
            })
        }
        
        createComment = (username, comment, restaurant_id, date, time) => {
            console.log("tweed got created")
            // post pushes to the database and updates the array of objects

            if (username === '' || comment === ''){
                return alert('NO EMPTY FIELDS!')
            }

            axios.post('https://hiddeneateries.herokuapp.com/comments', {
                username: username,
                comment: comment,
                restaurant_id: restaurant_id,
                date: date,
                time: time
            })
            // here we push newly entered info into this.state's tweeds array
            this.state.comments.push({
                username: username,
                comment: comment,
                restaurant_id: restaurant_id,
                date: date,
                time: time
            })
            // we set this.setState and update State's comments property with new`tweeds array info
            this.setState({
                comments: this.state.comments
            })
        }  
    
    showComment = () => {
        axios.get('https://hiddeneateries.herokuapp.com/comments')
        .then(res => {
          this.setState({
            comments: res.data.data
            })
        })
    }
    
    render(){
        return(
            <div className="single-rest-window">
                 <div className="r_close-div">
                    <div className="fa fa-cutlery" data-id={"_"+ this.props.m_id} id="r_close" onClick={this.props.close}> </div>
                </div>
                <div className="r_container">
                   
                    <div className="rsub_contL">
                        <div className="r_name">{this.props.name}</div>
                        <div className="r_image"><img src={this.props.image} /></div>
                        <div className="r_cuisine">{this.props.cuisine}</div>
                        <div className="r_address">{this.props.address}</div>
                        {/*<Map address={props.address}/>*/}
                    </div>
                    <div className="rsub_contR">
                        <div className="comments-div">
                            <div id="comments">Comments</div>
                            <CommentFeed comments={this.state.comments}/>
                        </div>
                        <Input createComment={this.createComment} inputId={this.props.m_id} />
                    </div>
                    
                </div>
                {/*<div id="r_close_area" onClick={this.props.close}></div>*/}
            </div>
            
        )
    }
    
}

export default SingleRest;