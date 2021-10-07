import React from 'react'
// import './style2.css'
import './newstyles.css'
import { Avatar } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="logo" >Express <span>Loans</span></div>
                <NavLink to="/loanexplore" activeClassName="navactive" className="navitem">Apply for Loan</NavLink>
                <NavLink to="/createaccount" activeClassName="navactive" className="navitem">Create Bank Account</NavLink>
                <NavLink to="/applyloan" activeClassName="navactive" className="navitem">Loan requests</NavLink>
                <Avatar className="navprofile" alt="Profile" sx={{ width: 32, height: 32 }} />
            </div>

        </div>
    )
}

export default Navbar
