import React, { useState } from 'react'
// import './style2.css'
import './newstyles.css'
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import { useData } from '../context/DataProvider'
import Alert from '@mui/material/Alert';
function Step2({ setStageNo, handleBack }) {

    function handleNextStage() {
        setStageNo(1);
    }

    const { userDetails, setUserDetails, getConnectedBanks } = useData();

    const [phno, setPhno] = useState("")
    const [message, setMessage] = useState("");

    const handlePhoneNo = () => {
        if (phno !== "") {
            getConnectedBanks(phno);
            handleNextStage();
        } else {
            setMessage("Please enter phone number")
        }
    }

    return (
        <div className="box">
            <div className="container">
                {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>Bank account details</h4>
                <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                <div className="textbox">
                    <TextField sx={{ width: '15%', paddingRight: '2rem' }} label="Code" id="filled-basic" value="+91" variant="filled" InputProps={{ disableUnderline: true }} />
                    <TextField
                        sx={{ width: '80%' }} id="filled-basic"
                        label="Please enter your mobile number" variant="filled"
                        InputProps={{ disableUnderline: true }} type="number"
                        value={phno} onChange={e => setPhno(e.target.value)} />
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
                        onClick={handlePhoneNo}
                    >Send OTP</Button>
                </div>
            </div>
        </div>
    )
}

export default Step2
