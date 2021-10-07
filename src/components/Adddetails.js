import React, { useEffect, useState } from 'react'
// import './style2.css'
import './newstyles.css'
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core'

import { useData } from '../context/DataProvider';
import Alert from '@mui/material/Alert';
function Adddetails({ handleNext, handleBack }) {

    const { userDetails, setUserDetails } = useData();
    const [message, setMessage] = useState("");
    const [educationalDetails, seteducationalDetails] = useState({
        percent10: '',
        percent12: '',
        entranceExamName: '',
        examMarks: '',
        collegeName: '',
        expectedFee: ''
    })

    const handleChange = (prop) => (event) => {
        seteducationalDetails({ ...educationalDetails, [prop]: event.target.value });
    };

    const handleBeforeNext = () => {
        if(educationalDetails.percent10!=='' && educationalDetails.percent12!=='' && 
            educationalDetails.entranceExamName!=='' && educationalDetails.examMarks!=='' &&
            educationalDetails.collegeName!=='' && educationalDetails.expectedFee!==''){
                setUserDetails({...userDetails, educationalDetails});
        
                handleNext();
            } else {
                setMessage("Please fill all the fields before continuing")
            }
    }

    return (
        <div className="box">
            <div className="container">
            {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>Additional Details</h4>

                <h6 style={{ paddingTop: "2rem" }}>Personal Details</h6>
                <div className="textbox">
                    <TextField
                        size="small" defaultValue={userDetails.phoneNum}
                        sx={{ width: "66%", paddingBottom: '1.5rem', paddingRight: '2rem' }} id="filled-basic"
                        label="Phone Number" variant="filled"
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Date od Birth"
                        // InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="date"
                        value={userDetails.dob}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small" defaultValue={userDetails.fname}
                        sx={{ width: '50%', paddingRight: '2rem' }}
                        id="filled-basic" label="First Name" variant="filled"
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small" defaultValue={userDetails.lname}
                        sx={{ width: '50%' }} id="filled-basic"
                        label="Last Name" variant="filled"
                        InputProps={{ disableUnderline: true }}
                    />
                </div>

                <h6 style={{ paddingTop: "3rem" }}>Educational Details</h6>
                {/* <div className="textbox">
                    <TextField size="small" fullWidth sx={{ paddingBottom: '1.5rem' }} id="filled-basic" label="College Name" variant="filled" InputProps={{ disableUnderline: true }} />
                    <TextField size="small" sx={{ width: '50%', paddingRight: '2rem' }} id="filled-basic" label="12th Percentage" variant="filled" InputProps={{ disableUnderline: true }} />
                    <TextField size="small" sx={{ width: '50%' }} id="filled-basic" label="10th Percentage" variant="filled" InputProps={{ disableUnderline: true }} />

                </div> */}

                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '50%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="10th %"
                        variant="filled" type="number" min="0" max="100"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.percent10} onChange={handleChange('percent10')}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '50%' }}
                        id="filled-basic"
                        label="12th %"
                        variant="filled" type="number" min="0" max="100"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.percent12} onChange={handleChange('percent12')}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '66%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Examination you appeared for"
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.entranceExamName} onChange={handleChange('entranceExamName')}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Marks Scored"
                        variant="filled" type="number"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.examMarks} onChange={handleChange('examMarks')}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '66%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="College of admission"
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.collegeName} onChange={handleChange('collegeName')}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Fee Estimate"
                        variant="filled" type='number' min="0"
                        InputProps={{ disableUnderline: true }}
                        value={educationalDetails.expectedFee} onChange={handleChange('expectedFee')}
                    />
                </div>

                <div className="bttn">
                    <Button type='submit'
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
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Adddetails
