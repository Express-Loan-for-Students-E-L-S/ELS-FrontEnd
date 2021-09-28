import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import Groupuser from './assets/Groupuser.png';
import Signup from './Signup';
import {Link} from 'react-router-dom'
function Welcome() {
    return (
        <div className="home">
            <div className="header">
                <div className="vector1"></div>
                <div className="vector2"></div>
                <div className="vector3"></div>
                <div className="title">Express Loans</div>
            </div>
            <div className="content">
                <div className="question">
                    Tired of visiting multiple banks to find a low interest loan ?
                </div>
                <div className="info">
                    We communicate with banks on your behalf so that you can enjoy quick personalized loan recommendations.

                </div>
                <Link to="/signup"><Button type="button" id="strt" class="btn btn-primary" >Get Started</Button></Link> 

               
            </div>
            <div className="pic">
                <img id="user" src={Groupuser}></img>
            </div>
            
            
        </div>
    )
}

export default Welcome
