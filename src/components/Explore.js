import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useData } from '../context/DataProvider';
const loanOptions = [
    {
        id: '1',
        bankName: 'State Bank of India',
        maxAmount: 1000000,
        duration: 5,
        interestRate: 8.9,
        colatral: 500000
    },
    {
        id: '2',
        bankName: 'Bank of India',
        maxAmount: 1100000,
        duration: 5,
        interestRate: 7.4,
        colatral: 700000
    },
    {
        id: '3',
        bankName: 'Axis Bank',
        maxAmount: 1400000,
        duration: 6,
        interestRate: 9.5,
        colatral: 600000
    },
    {
        id: '4',
        bankName: 'HDFC Bank',
        maxAmount: 1250000,
        duration: 6,
        interestRate: 6.6,
        colatral: 1100000
    },
    {
        id: '5',
        bankName: 'ICICI Bank',
        maxAmount: 1200000,
        duration: 4,
        interestRate: 10,
        colatral: 600000
    },
    {
        id: '6',
        bankName: 'Bank of Baroda',
        maxAmount: 2000000,
        duration: 7,
        interestRate: 7.4,
        colatral: 1500000
    },
    {
        id: '7',
        bankName: 'Yes Bank',
        maxAmount: 1200000,
        duration: 4,
        interestRate: 13.6,
        colatral: 800000
    },
]


function Explore({ handleBack, handleNext }) {

    const history = useHistory()
    const { userDetails, setUserDetails } = useData();

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
