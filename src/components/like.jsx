import React, { Component } from 'react';

class Like extends Component {
    state = { 
        post : this.props.post
     }
    
    handleClick = () => {

        const likecount = this.state.post.like ;
        const newlikecount = {like : likecount + 1 };
        this.setState({post : newlikecount});
    }
    render() { 
        const {post} = this.state;
        return ( 
            <div className="fa fa-heart float-left"
                 style={{color : 'red' , cursor : 'pointer'}}
                 onClick={this.handleClick}            >
                <span className="badge-primary badge-pill m-1">
                    {post.like}
                </span> 
            </div>
         );
    }
}
 
export default Like;