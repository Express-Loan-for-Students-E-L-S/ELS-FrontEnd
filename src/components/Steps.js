import React from 'react'
import { Avatar, Typography } from '@mui/material';

function Steps() {
    return (
        <div>
            <div className="steps">
                
                <div className="step"><Avatar label="Step1">1</Avatar><div className="label">Step One<p>Loan Details</p></div></div>
                <div className="step"><Avatar>2</Avatar><div className="label">Step Two<p>Account Details</p></div> </div>
                <div className="step"><Avatar>3</Avatar><div className="label">Step Three<p>Additional Details</p></div> </div>
                <div className="step"><Avatar>4</Avatar><div className="label">Step Four<p>Explore</p></div></div>
                
               
            </div>
            
        </div>
    )
}

export default Steps
