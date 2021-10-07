import React, {useState} from 'react'
// import './style2.css'
import './newstyles.css';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import { useData } from '../context/DataProvider';
import Alert from '@mui/material/Alert';
const names = [
    "Study Abroad Loan",
    "Undergraduate Education Loan (India)",
];


function Step1({ handleNext, handleBack }) {
    const { userDetails, setUserDetails } = useData();
    const [type, setType] = useState(userDetails.loanDetails ? userDetails.loanDetails.type : '');
    const [loanAmount, setLoanAmount] = useState(userDetails.loanDetails ? userDetails.loanDetails.loanAmount : '');
    const [duration, setDuration] = useState(userDetails.loanDetails ? userDetails.loanDetails.duration : '');
    const [message, setMessage] = useState("");


    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleStep1 = () => {
        if(type!=='' && loanAmount!=='' && duration!=='') {
            setUserDetails({...userDetails, loanDetails: {
                type, loanAmount, duration
            }});
    
            handleNext();
        } else {
            setMessage("Please fill all the fields before continuing")
        }
    }

    return (
        <div className="box">
            <div className="container">
                {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>What are you looking for?</h4>
                <h6>To share your financial data please enter the mobile number that is linked with bank</h6>
                <div className="textbox">
                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-multiple-name-label">Select type of loan</InputLabel>
                    <Select
                        variant="filled"
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={type}
                        onChange={handleChange}
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
                </div>
                <div className="textbox">
                    <TextField 
                        sx={{ width: '50%', paddingRight: '2rem' }} 
                        id="filled-basic" label="Loan Amount(in Rs)" variant="filled" 
                        InputProps={{ disableUnderline: true }} type="number"
                        value={loanAmount} onChange={e => setLoanAmount(e.target.value)}
                    />
                    <TextField 
                        sx={{ width: '50%' }} id="filled-basic" 
                        label="Duration (Years)" variant="filled" 
                        InputProps={{ disableUnderline: true }} type="number"
                        value={duration} onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <div className="bttn">
                    <Button type='submit'
                        disabled
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
                        onClick={handleStep1}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Step1
