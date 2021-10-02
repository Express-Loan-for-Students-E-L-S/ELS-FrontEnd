import React from 'react'
import Navbar from './Navbar'
import Steps from './Steps'
import './style2.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField,InputLabel } from '@mui/material';
import {Button} from '@material-ui/core'

function Adddetails() {
    return (
        <div>
            <Navbar/>
            <Steps/>
            <div className="box">
                <div className="container">
                    <h4>Additional Details</h4>
                   
                        <h6 style={{paddingTop:"2rem"}}>Personal Details</h6>
                        <div className="textbox">
                            <TextField fullWidth sx={{paddingBottom:'2rem'}} id="filled-basic" label="Phone Number" variant="filled" />
                            <TextField sx={{width:'50%',paddingRight:'3rem'}} id="filled-basic" label="Loan Amount" variant="filled" />
                            <TextField sx={{width:'50%'}} id="filled-basic" label="Duration" variant="filled" />

                        </div>

                        <h6 style={{paddingTop:"3rem"}}>Educational Details</h6>
                        <div className="textbox">
                            <TextField fullWidth sx={{paddingBottom:'2rem'}} id="filled-basic" label="College Name" variant="filled" />
                            <TextField sx={{width:'50%',paddingRight:'3rem'}} id="filled-basic" label="12th Percentage" variant="filled" />
                            <TextField sx={{width:'50%'}} id="filled-basic" label="10th Percentage" variant="filled" />

                        </div>
                           
                           
                        <div className="bttn">
                            <Button type='submit' variant='contained'
                                style={{
                                    background:'#4285f4', 
                                    color:'#FFFFFF',
                                    height:'50px',
                                    
                                    
                            }} >Continue</Button>

                        </div>
                       
                            
                        
                           

                        
                        
                    
                </div>
            </div>

        </div>
    )
}

export default Adddetails
