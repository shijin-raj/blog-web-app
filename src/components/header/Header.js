import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>
                    <FontAwesomeIcon icon={['fas','blog']} /> Blog Web App</h1>
            </header>
        )
    }
}
