import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import "./Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h4>
                    SHIJIN RAJ A
                </h4>
                <h4>
                    shijin802@gmail.com
                </h4>
                <div className="footer-contact">
                        <a target="_blank" href="https://github.com/ShijinRaj0"><span className="social"><FontAwesomeIcon icon={['fab','github']} size="lg" /></span></a>
                        <a target="_blank" href="https://www.linkedin.com/in/shijin-raj-4791a3200"><span className="social"><FontAwesomeIcon icon={['fab','linkedin']} size="lg" /></span></a>
                        <a target="_blank" href="https://facebook.com/shijinraj.arakkan"><span className="social"><FontAwesomeIcon icon={['fab','facebook']} size="lg" /></span></a>
                </div>
            </div>
        )
    }
}
