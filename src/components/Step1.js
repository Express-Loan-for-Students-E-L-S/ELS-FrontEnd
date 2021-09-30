import React from 'react'
import './style2.css'
import './style.css';
import { Avatar } from '@mui/material';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from 'react-bootstrap';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import {Button} from '@material-ui/core';
import Navbar from './Navbar';
function Step1() {
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
      
    return (
        <div>
            <Navbar/>
            <div className="box">
                <div className="container">
                    <h4>What are you looking for?</h4>
                    <h6>To share your financial data please enter the mobile number that is linked with bank</h6>
                        <FormControl fullWidth sx={{paddingLeft:'4rem',paddingTop:'3rem',paddingRight:'4rem'}}>
                            <InputLabel id="demo-multiple-name-label" style={{paddingLeft:'4rem',paddingTop:'3rem',paddingRight:'3rem'}}>Select type of loan</InputLabel>
                            <Select
                            variant="filled"
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            
                            >
                            {names.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                >
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        <div className="textbox">
                            <TextField sx={{width:'50%',paddingRight:'3rem'}} id="filled-basic" label="Loan Amount" variant="filled" />
                            <TextField sx={{width:'50%'}} id="filled-basic" label="Duration" variant="filled" />

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

export default Step1
