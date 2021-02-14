import React, { Component } from 'react'
import axios from 'axios';
import './BlogPost.css';
import {Link} from 'react-router-dom';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class BlogPost extends Component {
    state={
        data:[],
        data_loaded:false
    }

    getBlogPost(){
        var {id,postid}=this.props.match.params;
        const api_url="https://jsonplaceholder.typicode.com/posts/"+postid;
        axios.get(api_url).then(res=>{
        this.setState({data:res.data,data_loaded:true});
      });
    }

    componentDidMount(){
        this.getBlogPost();
    }

    render() {
        var {id,postid}=this.props.match.params;
        var data=this.props.data;
        var author=data.find(user=>{return user.id===parseInt(id);});
        return (
            <>
            {this.state.data_loaded?(
            <div>
                <Link to={'/posts/'+id}>
                    <span className="btn-back">

                <FontAwesomeIcon icon={['fas', 'chevron-circle-left']} />
                    </span>
                </Link>
                <div className='blog-title'>
                    {this.state.data.title.toUpperCase()} 
                <div className='author'>    
                    <FontAwesomeIcon icon={['fas', 'pen-nib']} /> {author.name}</div>
                </div>
                <div className='blog-content'>
                {this.state.data.body}
                </div>
                <Link to={'/posts/'+id+'/'+postid+'/comments'}>
                    <span className='btn btn-comments'>
                        <FontAwesomeIcon icon={['fas','comment']} /> COMMENTS</span></Link>
                        <Link to={'/posts/'+id+'/'+postid+'/delete'}>
                        <span className="btn btn-delete">
                        <FontAwesomeIcon icon={['fas','trash']} /> DELETE POST</span>
                        </Link>
            </div>
            ):(
                <LoadingScreen />
            )}
            </>
        )
    }
}
