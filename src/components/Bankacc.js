import React from 'react'
import { Button } from '@material-ui/core';
import { RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';
import { useData } from '../context/DataProvider';
import Alert from '@mui/material/Alert';
import './newstyles.css'

const Banks = [
    {
        id: 0,
        bankName: "Bank of India",
        accType: "Savings",
        accNo: "AC / XX4000",
        ifscCode: "BINO0466",
    },
    {
        id: 1,
        bankName: "Axis Bank",
        accType: "Loan",
        accNo: "AC / XX3240",
        ifscCode: "AXISO0393",
    },
    {
        id: 2,
        bankName: "Bank of Baroda",
        accType: "Savings",
        accNo: "AC / XX2401",
        ifscCode: "BOBNO0352",
    },
    {
        id: 3,
        bankName: "State Bank of India",
        accType: "Loan",
        accNo: "AC / XX1111",
        ifscCode: "SBINO0492",
    },
]
function Bankacc({ handleNext, handleBack }) {
    const { userDetails, setUserDetails } = useData();
    const [selectedValue, setSelectedValue] = useState(userDetails.selectedBank || null);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSelectBank = () => {
        if(selectedValue !== null) {
            setUserDetails({...userDetails, selectedBank: Banks[selectedValue]})
            handleNext()
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
                            Banks.map(bank => (
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
                                            {bank.accType + " " + bank.accNo}
                                        </p>
                                    </div>
                                </div>
                            ))
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
