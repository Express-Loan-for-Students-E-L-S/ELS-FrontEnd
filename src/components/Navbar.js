import React from 'react'
import './style2.css'
import { Avatar } from '@mui/material'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                
                <div className="logo" >Express Loans</div>
                <div className="navitem">Apply for Loan</div>
                <div className="navitem">Create Bank Account</div>
                <div className="navitem">Loan requests</div>
                <Avatar className="navitem" alt="Profile" />

            
        </div>
            
        </div>
    )
}

export default Navbar
