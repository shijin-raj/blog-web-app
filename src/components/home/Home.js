import React, { Component } from 'react'
import BlogTable from '../blogtable/BlogTable'
import './Home.css';
export default class Home extends Component {

    state ={
        filtered_data:[],
        filter:"",
    }

    handleChange=(event)=>{
        var val=event.target.value;
        var data = this.props.data;
        var filtered_posts=data.filter(
            (author)=>{    
                return author.name.includes(val)||author.company.name.includes(val)||author.name.toLowerCase().includes(val)||author.company.name.toLowerCase().includes(val);  
            }
            );
        this.setState({
                filter:val,
                filtered_data:filtered_posts
            });
    }

componentDidMount(){
    this.setState({
        filtered_data:this.props.data,
        filter:""
    });
}
    render() {
        return (
            <>
            <div className="page-title">BLOGS | AUTHORS</div>
             <div className="author-search">
                    <span>
                        <input type="text" onChange={this.handleChange} title="Search by post title"  placeholder='FILTER BY AUTHOR/COMPANY' />
                    </span>
                </div>
                <BlogTable data={this.state.filtered_data} />
            </>
        )
    }
}
