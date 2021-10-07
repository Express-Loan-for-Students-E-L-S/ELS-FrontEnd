import React from 'react'
// import './style2.css'
import './newstyles.css';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import { useData } from '../context/DataProvider'

function PersonalDetails({ handleNext, handleBack }) {
    const { userDetails } = useData();

    return (
        <div className="box">
            <div className="container lg">
                <h4>About yourself</h4>
                <h6>Please share the information correctly, this will be used in the furtehr process of account creation</h6>

                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="First Name"
                        variant="filled"
                        defaultValue={userDetails.fname}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Father Name"
                        variant="filled"
                        defaultValue={userDetails.fatherName}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Last Name"
                        variant="filled"
                        defaultValue={userDetails.lname}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '1.5rem' }}
                        id="filled-basic"
                        label="Date od Birth"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="date"
                        defaultValue={userDetails.dob}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '1.5rem' }}
                        id="filled-basic"
                        label="Gender"
                        variant="filled"
                        defaultValue={userDetails.gender}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Mother Name"
                        variant="filled"
                        defaultValue={userDetails.motherName}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        fullWidth
                        multiline
                        size="small"
                        id="filled-basic"
                        label="Address"
                        variant="filled"
                        defaultValue={userDetails.address}
                        InputProps={{ disableUnderline: true }}
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
                        onClick={handleNext}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
