import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import "./DeletePost.css";
export default class DeletePost extends Component {
    state={
        deleted:false
    }

deleteHandle=()=>{
        var {postid}=this.props.match.params;
        const api_url="https://jsonplaceholder.typicode.com/posts/"+postid;
        axios.delete(api_url).then(res=>{
        this.setState({deleted:true});
      }).catch(err=>console.error(err));
}
    render() {
        var {id,postid} =this.props.match.params;
        return (
            <>
            {this.state.deleted?(
                <Redirect to={'/posts/'+id}></Redirect>
            ):(
                <div>
             <h3>Are you sure to delete the post?</h3>
                <span className="btn btn-del" onClick={this.deleteHandle}>
                    Yes
                </span>
                <Link to ={'/posts/'+id+'/'+postid}>
                <span className="btn btn-del">
                    No
                </span>
                </Link>
                </div>
            )}
            </>
        )
    }
}
