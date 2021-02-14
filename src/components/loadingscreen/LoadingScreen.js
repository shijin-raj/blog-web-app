import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../libraries/fontawesome/fontawesome';

export default class LoadingScreen extends Component {
    render() {
        return (
            <h1>
              <FontAwesomeIcon icon={['fas', 'spinner']} spin />
            </h1>
        )
    }
}
