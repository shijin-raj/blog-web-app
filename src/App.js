import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import Home from './components/home/Home';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import LoadingScreen from './components/loadingscreen/LoadingScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './libraries/fontawesome/fontawesome';
import BlogPost from './components/blogpost/BlogPost';
import Comments from './components/comments/Comments';
import Footer from './components/footer/Footer';
import DeletePost from './components/deletepost/DeletePost';
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
        this.setState({user_data:res.data,data_loaded:true});
      }).catch((err)=>{
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header /> 
      {this.state.data_loaded==true?(
     <Router>
      <Link to='/blog-web-app'>
        <span className='btn btn-home'>
        <FontAwesomeIcon icon={['fas', 'home']} /> HOME
        </span>
        </Link>
        <Route exact path='/blog-web-app'  render={(props)=>
          <Home {...props} data={this.state.user_data} />
        } />
        <Route exact path='/posts/:id' render={(props)=>
          <Posts {...props} data={this.state.user_data} />
        } />
        <Route path='/posts/:id/:postid' render={(props)=>
          <BlogPost {...props} data={this.state.user_data} />
        } />
        <Route path='/posts/:id/:postid/comments' render={(props)=>
          <Comments {...props} data={this.state.user_data} />
        } />
        <Route path='/posts/:id/:postid/delete' render={(props)=>
          <DeletePost {...props} data={this.state.user_data} />
        } />
        <Footer />
      </Router>
      ): (
        <LoadingScreen />
      )}
    </div>
    )
  }
}

export default App;