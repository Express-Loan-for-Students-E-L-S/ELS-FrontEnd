import React from 'react'
import { Button } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './newstyles.css'
import { useData } from '../context/DataProvider'
import Alert from '@mui/material/Alert';
function SelectType({ handleNext, handleBack }) {
    const [selectedValue, setSelectedValue] = useState(null);
    const { userDetails, setUserDetails } = useData()
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleBeforeNext = () => {
        if(selectedValue !== null) {
            setUserDetails({...userDetails, createAccountType: selectedValue})

            history.push('/createsuccess')
        } else {
            setMessage("Please select account type before continuing")
        }
    }

    return (
        <div className="box">
            <div className="container">
            {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>Select type of account</h4>
                <h6>Following are the options available for you</h6>

                <div className="textbox">
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="gender"
                            name="controlled-radio-buttons-group"
                            value={selectedValue}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="loan" control={<Radio />} label="Loan Account" />
                            <FormControlLabel value="savings" control={<Radio />} label="Savings Account" />
                            <FormControlLabel value="student" control={<Radio />} label="Student Account" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="bttn">
                    <Button
                        type='submit'
                        style={{
                            height: '50px',
                        }}
                        onClick={handleBack}
                    >Back</Button>
                    <Button type='submit' variant='contained'
                        style={{
                            background: '#4285f4',
                            color: '#FFFFFF',
                            height: '50px',
                        }}
                        onClick={handleBeforeNext}
                    >Create Account</Button>
                </div>
            </div>
        </div>
    )
}

export default SelectType
