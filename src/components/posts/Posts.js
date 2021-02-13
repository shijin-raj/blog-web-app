import React, { Component } from 'react';
import axios from 'axios';
export default class Posts extends Component {
    state={
        data:[]
    }

    getPosts(){
        let {id}=this.props.match.params;
        const api_url="https://jsonplaceholder.typicode.com/posts?userId="+id;
        axios.get(api_url).then(res=>{
        this.setState({data:res.data});
        console.log(res.data);
        console.log(this.state.data);
      });
    }

    componentDidMount(){
        this.getPosts();
    }
    render() {
        let {id}=this.props.match.params;
        return (
            <div>
                All Posts from Author {id}
                <ul>
                    {
                    this.state.data.map((blog)=>
                            <li key={blog.id}>{blog.title}</li>)
                    }
                </ul>
            </div>
        )
    }
}
