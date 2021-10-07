import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useData } from '../context/DataProvider';
import axios from "axios";
import authHeader from "../services/auth-header";

function Explore({ handleBack, handleNext }) {

    const [loanOptions, setLoanOptions] = useState(null)
    const history = useHistory()
    const { userDetails, setUserDetails } = useData();

    useEffect(() => {
        let obj = {
            fname: userDetails.fname,
            lname: userDetails.lname,
            dob: userDetails.dob,
            phoneNum: userDetails.phoneNum,
            ...userDetails.educationalDetails
        }
        axios.post(
            "http://localhost:8080/api/user/requestLoanOptions",
            { exploreinfo: obj },
            { headers: authHeader() }
        ).then(response => {
            setLoanOptions(response.data.options.loanOptions);
        })
    }, [userDetails])



    const handleApply = (id) => {
        setUserDetails({...userDetails, selectedLoan: loanOptions.find(t => t.id === id)})
        history.push('./applyloan') 
    }

    return (
        <div className="box">
            <div className="container lg">
                <h4>Available Options</h4>
                <h6>Choose a loan to apply</h6>
                <div className="loanopt__list">
                    {
                        loanOptions
                        ?
                        loanOptions.map(opt => (
                            <div className="loanopt__item" key={opt.id}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <h5 className="loanopt__bank-name">
                                        {opt.bankName}
                                    </h5>
                                    <p className="loanopt__max-amount">
                                        <span>Max amount:</span>
                                        Rs. {opt.maxAmount}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                                    <p className="loanopt__duration">
                                        <span>Repayment After</span>
                                        {opt.duration} years
                                    </p>
                                    <p className="loanopt__interest">
                                        <span>Rate of Interest</span>
                                        {opt.interestRate} p.c.p.a*
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                                    <p className="loanopt__colatral">* If collatoral of {opt.colatral} then reduced rate of interest {(opt.interestRate*0.8).toFixed(2)} pcpa</p>
                                    <Button
                                        variant='contained'
                                        style={{
                                            background: '#4285f4',
                                            color: '#FFFFFF',
                                            fontSize: '12px'
                                        }}
                                        onClick={() => handleApply(opt.id)}
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        ))
                        :
                        <p>Fetching loan options</p>
                    }
                </div>
                <div className="bttn">
                    <Button type='submit'
                        style={{
                            height: '50px',
                        }}
                        onClick={handleBack}
                    >Back</Button>
                    <Button type='submit' variant='contained' disabled
                        style={{
                            height: '50px',
                        }}
                        onClick={handleNext}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Explore
