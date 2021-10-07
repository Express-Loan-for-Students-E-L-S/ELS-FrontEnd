import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import Alert from '@mui/material/Alert';

function Otpverify({ setStageNo, handleBack }) {
    // const wdth = {
    //     width: '10%'
    // }

    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState("");

    const handleOtpChange = (newotp) => setOtp(newotp);

    function handleNextStage() {
        if(otp.length === 4) {
            setStageNo(2);
        } else {
            setMessage("You cannot proceed without OTP")
        }
    }



    return (
        <div className="box">
            <div className="container">
            {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>Bank account details</h4>
                <h6>To share your financial data please enter the mobile number that is linked with bank </h6>

                <h6> Enter OTP sent to your mobile number</h6>

                <div className="otpbox">
                    <OtpInput
                        value={otp}
                        onChange={handleOtpChange}
                        numInputs={4}
                        separator={<span>-</span>}
                        inputStyle="otp-input"
                        isInputNum={true}
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
                        onClick={handleNextStage}
                    >Verify</Button>

                </div>
            </div>
        </div>
    )
}

export default Otpverify
