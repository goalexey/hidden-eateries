import React from 'react';
import axios from 'axios';


function Comment(props){
    
    const deleteComment = (e) => {
        console.log(props.idc);
        axios.delete('https://hiddeneateries.herokuapp.com/comments/' +props.idc)
        document.querySelector('#delete' +props.idc).remove();
    }
    
    
    
    return(
        <div>
            <div className="c-container" id={"delete"+ props.idc}>
                <div className="right above-comment"><span className="c-delete fa fa-close" id={props.idc} onClick={(e) => deleteComment(e)}></span></div>
                <div className="c-comment">{props.comment}   
                </div>
                <div className="right c-name">Posted by: <span>{props.username}</span></div>
                <div className="right c-date">on <span>{props.date}</span> at <span>{props.time}</span></div>
            </div>
        </div>
    )
}

export default Comment;