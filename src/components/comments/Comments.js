import React, { Component } from 'react'
import LoadingScreen from '../loadingscreen/LoadingScreen';
import axios from 'axios';
import './Comments.css'
export default class Comments extends Component {
    state={
        data:[],
        data_loaded:false
    }
    
    getComments(){
        var {postid}=this.props.match.params;
        const api_url="https://jsonplaceholder.typicode.com/posts/"+postid+"/comments";
        axios.get(api_url).then(res=>{
        this.setState({data:res.data,data_loaded:true});
      }).catch(err=>console.error(err));
    }
    
    componentDidMount(){
        this.getComments();
    }
    render() {
        return (
            <>
            {this.state.data_loaded?(
            <div>
               <div className="post-list">
                    {
                    this.state.data.map((comment)=>
                            <div className='comment' key={comment.id}>
                                    <div className="comment-title">
                                    {comment.name}
                                    </div>
                                    <div className="comment-body">
                                        {comment.body}
                                    </div>
                                    <div className="comment-mail">
                                        {comment.email}
                                    </div>
                                </div>)
                    }
                </div>
            </div>
            ):(
                <LoadingScreen />
            )}
            </>
        )
    }
}
