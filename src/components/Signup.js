import React from 'react'
import './style.css';
import signup from './assets/signup.png'
import Form from '@mui/material/FormControl';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { padding } from '@mui/system';
import {Link} from 'react-router-dom'

function Signup() {
    
    return (
        <div className="signup">
            <div className ="pg_left">
                <div className="header">
                    <div className="vector1"></div>
                    <div className="vector2"></div>
                    <div className="vector3"></div>
                    <div className="title">Express Loans</div>
                </div>
                <img className ="signup_img" src={signup}></img>
            </div>
            <div className="pg_right">
                <h3>Create Account</h3>
                <h6>We communicate with banks on your behalf so that you can enjoy quick personalized loan recommendations</h6>
                <a href="#">
                    <div class="google-btn">
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p class="btn-text"><b>Sign up with google</b></p>
                    </div>
                </a>
            <Grid className="form">
                <form>
                    {/* <TextField fullWidth label='Date of Birth' placeholder="Enter your Date of Birth" /> */}
                    <TextField id="outlined-basic" label="First Name" variant="filled" 
                    style={{
                        width:'50%',
                        paddingBottom:'2rem',
                        paddingRight:'2rem',
                        paddingTop:'1rem'
                    }} required />
                    <TextField id="outlined-basic" label="Last Name" variant="filled" 
                    style={{
                        width:'50%',
                        paddingBottom:'2rem',
                        paddingTop:'1rem'
                    }} required />
                    {/* Dropdown */}
                    {/* <TextField fullWidth label='Education' placeholder="Enter your Qualification" /> */}
                    
                    <TextField fullWidth id="outlined-basic" label="Enter Email" variant="filled" 
                    style={{
                        paddingBottom:'2rem',
                    }} required />
                    
                    <TextField fullWidth id="outlined-basic" label="Enter Password" variant="filled" 
                    style={{
                        paddingBottom:'2rem',
                    }} required />

                    <Button fullWidth type='submit' variant='contained'
                     style={{
                        background:'#4285f4', 
                        color:'#FFFFFF',
                        height:'50px',
                     }} >Continue</Button>
                     <div className="text">
                        
                    </div>
                    
                </form>
                
                
        </Grid>
        <div className="text">
                    <p>Already have an Account? <Link to="/signin" style={{color:'#4285f4'}}>LogIn</Link></p>
                </div>
        
        
            </div>
        </div>
    )
}

export default Signup
