import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./BlogTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../libraries/fontawesome/fontawesome';
export default class BlogTable extends Component {
  
    render() {
        var data=this.props.data;
        return (
            <>
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
                              return (
                                <tr key={user.id}>
                                <td><FontAwesomeIcon icon={['fas', 'pen-nib']} /> {user.name}</td>
                                <td><FontAwesomeIcon icon={['fas', 'building']} /> {user.company.name}</td>
                                <td><Link to={'/posts/'+user.id}>
                                    <span className="btn btn-view">
                                <FontAwesomeIcon icon={['fas', 'eye']} /> VIEW POSTS
                                    </span>
                                 </Link></td>
                                </tr>
                              )
                          })
                      }
                  </tbody>
                </table>  
            </div>
            </>
        )
    }
}
