import React from 'react'
import './style2.css'
import Navbar from './Navbar'
import Steps from './Steps'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import {Button} from '@material-ui/core';

function Step2() {
    return (
        <div>
            <Navbar/>
            <Steps/>
            <div className="box">
                <div className="container">
                    <h4>Bank account details</h4>
                    <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                        <div className="textbox">
                            <TextField sx={{width:'15%',paddingRight:'2rem'}} id="filled-basic" value="+91" variant="filled" />
                            <TextField sx={{width:'80%'}} id="filled-basic" label="Please enter your mobile number" variant="filled" />

                        </div>
                           
                           
                       
                        {/* <FormControl sx={{paddingLeft:'2rem',paddingTop:'2rem',width:'50%',paddingRight:'4rem'}}>
                            <TextField id="filled-basic" label="Duration" variant="filled" />
                            
                        </FormControl> */}
                        <div className="bttn">
                            <Button type='submit' variant='contained'
                                style={{
                                    background:'#4285f4', 
                                    color:'#FFFFFF',
                                    height:'50px',
                                    
                                    
                            }} >Send OTP</Button>

                        </div>
                       
                            
                        
                           

                        
                        
                    
                </div>
            </div>
                
            
        </div>
    )
}

export default Step2
