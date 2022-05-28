import React, { Component } from "react";
import BlogTable from "../blogtable/BlogTable";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {
  state = {
    filtered_data: [],
    filter: "",
  };

  handleChange = (event) => {
    var val = event.target.value;
    var data = this.props.data;
    var filtered_posts = data.filter((author) => {
      return (
        author.name.includes(val) ||
        author.company.name.includes(val) ||
        author.name.toLowerCase().includes(val) ||
        author.company.name.toLowerCase().includes(val)
      );
    });
    this.setState({
      filter: val,
      filtered_data: filtered_posts,
    });
  };

  componentDidMount() {
    this.setState({
      filtered_data: this.props.data,
      filter: "",
    });
  }
  render() {
    return (
      <div className="blogs-panel">
        <div className="blogs-pane-head">
          <h1>
            <FontAwesomeIcon icon={["fas", "blog"]} /> Blog Web App
          </h1>
          <input
            className="author-search"
            type="text"
            onChange={this.handleChange}
            title="Search by post title"
            placeholder="Search Posts"
          />
        </div>
        <BlogTable data={this.state.filtered_data} />
      </div>
    );
  }
}
