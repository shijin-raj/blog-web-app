import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './navbar.css'
export default class Navbar extends Component {

    handleMenuChange= (event)=>{
        let menus= document.querySelectorAll('.nav-item');
        menus.forEach(element => {
            if(element.classList.contains("active")){
                element.classList.remove("active")
            }
        });
        event.target.classList.add("active");
    }
    render() {
        return (
            <div className="nav-container">
                <div className="nav-item" onClick={(e)=>{this.handleMenuChange(e)}}><FontAwesomeIcon icon={['fas', 'pen-nib']} /></div>
                <div className="nav-item" onClick={(e)=>{this.handleMenuChange(e)}}><FontAwesomeIcon icon={["fas", "building"]} /></div>
            </div>
        )
    }
}
