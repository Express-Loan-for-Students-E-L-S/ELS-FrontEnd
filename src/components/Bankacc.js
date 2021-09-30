import React from 'react'
import Navbar from './Navbar'
import Steps from './Steps'
import { TextField } from '@mui/material';
import {Button} from '@material-ui/core';
import { FormControl,FormControlLabel , FormLabel, RadioGroup ,Radio} from '@mui/material';
function Bankacc() {
    return (
        <div>
            <Navbar/>
            <Steps/>
            <div className="box">
                <div className="container">
                    <h4>Bank account details</h4>
                    <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                    <h6> Select bank account you want share with us</h6>

                        <div className="bnklist">
                        <FormControl component="fieldset" style={
                                    {
                                        paddingLeft:'1rem'
                                    }
                                }>
                            <RadioGroup
                                name="radio-buttons-group"
                            >
                                <FormControlLabel  value="1" control={<Radio />} label="Bank of India" />
                                <FormControlLabel value="2" control={<Radio />} label="Bank of India" />
                                <FormControlLabel value="3" control={<Radio />} label="Bank of India" />
                            </RadioGroup>
                        </FormControl>
                                                

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

export default Bankacc
