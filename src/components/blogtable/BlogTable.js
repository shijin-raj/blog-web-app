import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./BlogTable.css";
export default class BlogTable extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        var data=this.props.data;
        return (
            <div className="container">
              <table>
                  <thead>
                  <tr>
                    <th>
                        NAME
                    </th>
                    <th>
                        COMPANY
                    </th>
                    <th>
                        BLOG POSTS
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          data.map((user)=>{
                              console.log(user.name);
                              return (
                                <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.company.name}</td>
                                <td><Link to={'/posts/'+user.id}>View Posts</Link></td>
                                </tr>
                              )
                          })
                      }
                  </tbody>
                </table>  
            </div>
        )
    }
}
