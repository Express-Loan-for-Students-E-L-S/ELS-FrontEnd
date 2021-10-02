import React from 'react'
import Navbar from './Navbar'
import Steps from './Steps'
import { TextField } from '@mui/material';
import {Button} from '@material-ui/core';
import { FormControl,FormControlLabel , FormLabel, RadioGroup ,Radio} from '@mui/material';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

function Bankacc() {
    const [selectedValue, setSelectedValue] = useState("Bank of India");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const Banks=[
        "Bank of India","Bank of Baroda","State Bank of India"
    ]
    return (
        <div>
            <Navbar/>
            <Steps/>
            <div className="box">
                <div className="container">
                    <h4>Bank account details</h4>
                    <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                    <h6> Select bank account you want to share with us</h6>

                        <div className="bnklist">
                        <List sx={{ width: '100%' }}>
                                {Banks.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                    <ListItem
                                        key={value}
                                       
                                    >
                                        <ListItemButton >
                                        <ListItemIcon>
                                            <Radio
                                                onChange={handleChange}
                                                value={selectedValue}
                                                name="radio-buttons"
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value} />
                                        </ListItemButton>
                                    </ListItem>
                                    );
                                })}
                                </List>
                           
                                                

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
