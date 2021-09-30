import React from 'react'
import Navbar from './Navbar'
import Steps from './Steps'
import { TextField } from '@mui/material';
import {Button} from '@material-ui/core';

function Otpverify() {
    const wdth={
        width:'10%'
    }
    return (
        <div>
            <Navbar/>
            <Steps/>
            <div className="box">
                <div className="container">
                    <h4>Bank account details</h4>
                    <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                    <h6> Enter OTP sent to your mobile number</h6>

                        <div className="otpno">
                            <TextField  style={wdth} id="standard-basic"  variant="standard" />
                            <TextField style={wdth} id="standard-basic"  variant="standard" />
                            <TextField style={wdth} id="standard-basic"  variant="standard" />
                            <TextField style={wdth} id="standard-basic"  variant="standard" />

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
                                    
                                    
                            }} >Continue</Button>

                        </div>
                       
                            
                        
                           

                        
                        
                    
                </div>
            </div>
                
            

        </div>
    )
}

export default Otpverify
