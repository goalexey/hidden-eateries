import React, {Component} from 'react';
import Comment from './Comment';

class CommentFeed extends Component{
    constructor(props){
        super(props)
    }
    
    renderComment = () => {
        let renderList = [];
        
        for(let i = 0; i < this.props.comments.length; i++){
            console.log(this.props.comments[i].comment)
            renderList.push(
                <Comment username={this.props.comments[i].username} comment={this.props.comments[i].comment} date={this.props.comments[i].date} time={this.props.comments[i].time} key={i} idc={this.props.comments[i].idc} />
            )
        }
        
        return renderList.reverse();
    };
    
    render(){
        return(
            <div>
            {this.renderComment()}
            </div>
        )
    }
}

export default CommentFeed;