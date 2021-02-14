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
        console.log(res.data);
        console.log(this.state.data);
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
                <FontAwesomeIcon icon={['fas', 'chevron-left']} />
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
                    <span className='btn-comments'>COMMENTS</span></Link>
            </div>
            ):(
                <LoadingScreen />
            )}
            </>
        )
    }
}
