
import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import Home from './components/home/Home';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component {
    state={
      data_loaded:false,
      user_data:[]
    }
    componentDidMount(){
      this.getUsersFromAPI();
    }

    getUsersFromAPI=()=>{
      const api_url="https://jsonplaceholder.typicode.com/users";
      axios.get(api_url).then(res=>{
        this.setState({user_data:res.data});
      });
  }

  render() {
    return (
      <div className="App">
      <Router>
      <Header />
      <Link to='/'>Home</Link>
        <Route exact path='/'  render={(props)=>
          <Home {...props} data={this.state.user_data} />
        } />
        <Route path='/posts/:id' render={(props)=>
          <Posts {...props} data={this.state.user_data} />
        }
        />
      </Router>
    </div>
    )
  }
}

export default App;