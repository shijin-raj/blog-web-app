import React, { Component } from 'react';
import axios from 'axios';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../libraries/fontawesome/fontawesome';
import {Link} from 'react-router-dom';
import './Posts.css'
export default class Posts extends Component {
    state={
        data:[],
        data_loaded:false,
        filter:"",
        filtered_data:[]
    }

    getPosts(){
        let {id}=this.props.match.params;
        const api_url="https://jsonplaceholder.typicode.com/posts?userId="+id;
        axios.get(api_url).then(res=>{
        this.setState({data:res.data,data_loaded:true,filtered_data:res.data});
      });
    }

    componentDidMount(){
        this.getPosts();
    }

    handleChange=(event)=>{
        var val=event.target.value;
        console.log(val);
        var {data} = this.state;
        var filtered_posts=data.filter(
            (post)=>{    
                return post.title.includes(val.toLowerCase());  
            }
            );
        console.log(filtered_posts);
        this.setState({
                filter:val,
                filtered_data:filtered_posts
            });
    }


    render() {
        var {id}=this.props.match.params;
        var data=this.props.data;
        var author=data.find(user=>{return user.id===parseInt(id);});

        return (
            <>
            {this.state.data_loaded?(
    
                <div>
                <div className="post-author">
                <FontAwesomeIcon icon={['fas', 'pen-nib']} /> 
                     {author.name}</div>
                <div className="post-search">
                    <span>
                        <input type="text" title="Search by post title" value={this.state.filter} placeholder='FILTER BY TITLE' onChange={this.handleChange}/>
                    </span>
                </div>
                <div className="post-list">
                    {
                    this.state.filtered_data.map((blog)=>
                            <div className='card' key={blog.id}>
                                <h5>{blog.title.toUpperCase()}</h5>
                                <Link to={'/posts/'+id+'/'+blog.id}>
                                    <span className='btn-view'>
                                    <FontAwesomeIcon icon={['fas', 'eye']} /> VIEW POST</span></Link>
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
