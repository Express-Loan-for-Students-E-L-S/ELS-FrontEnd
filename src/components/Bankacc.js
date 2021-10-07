import React from 'react'
import { Button } from '@material-ui/core';
import { RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';
import { useData } from '../context/DataProvider';
import Alert from '@mui/material/Alert';
import './newstyles.css'

function Bankacc({ handleNext, handleBack }) {
    const { userDetails, setUserDetails, getBankDetails } = useData();
    const [selectedValue, setSelectedValue] = useState(userDetails.selectedBank || null);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSelectBank = () => {
        if(selectedValue !== null) {
            getBankDetails(selectedValue, handleNext)
        } else {
            setMessage("Please select a bank account to proceed")
        }
    }

    return (
        <div className="box">
            <div className="container">
            {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                <h4>Bank account details</h4>
                <h6> Select bank account you want to share with us</h6>

                <div className="bnklist">
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={selectedValue}
                        onChange={handleChange}
                    >

                        {
                            userDetails.connectedBankAccounts 
                            ?
                            userDetails.connectedBankAccounts.map(bank => (
                                <div className="bnklist__item" key={bank.id}>
                                    <Radio
                                        value={bank.id}
                                        name="radio-buttons"
                                        style={{ margin: '2px 4px' }}
                                    />
                                    <div className="bnklist__info">
                                        <p className="bnklist__name">
                                            {bank.bankName}
                                        </p>
                                        <p className="bnklist__acc">
                                            {bank.accountType + " " + bank.accountNum}
                                        </p>
                                    </div>
                                </div>
                            ))
                            :
                            <p>No connected banks account found</p>
                        }
                    </RadioGroup>
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
                        onClick={handleSelectBank}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Bankacc
