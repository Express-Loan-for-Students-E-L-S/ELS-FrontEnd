import React from 'react';
import Button from '@mui/material/Button';
// import './style.css';
import '../components/newstyles.css';
import Groupuser from '../components/assets/Groupuser.png';
import {Link} from 'react-router-dom'
function Welcome() {
    return (
        <div className="home">
            <div className="header">
                <h1 className="logo">Express <span>Loans</span></h1>
            </div>
            <div className="content">
                <h2 className="question">
                    Tired of visiting multiple banks to find a low interest loan ?
                </h2>
                <div className="info">
                    We communicate with banks on your behalf so that you can enjoy quick personalized loan recommendations.

                </div>
                <Link to="/signup">
                    <Button variant="contained" id="strt">Get Started</Button>
                </Link> 

               
            </div>
            <div className="pic">
                <img id="user" alt="user" src={Groupuser}></img>
            </div>
            
            
        </div>
    )
}

export default Welcome
