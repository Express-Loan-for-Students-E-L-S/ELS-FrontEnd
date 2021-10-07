import React, { useState } from 'react'
import '../components/newstyles.css'
import Box from '@mui/material/Box';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import Navbar from '../components/Navbar';
import { useData } from '../context/DataProvider';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router';
const ApplyLoan = () => {
    const [mk10File, setMk10File] = useState()
    const [mk12File, setMk12File] = useState()
    const [entranceFile, setEntranceFile] = useState()
    const history = useHistory()
    const [loading, setLoading] = useState('');

    const handleSubmit = () => {
        history.push('/loansuccess')
    } 

    const onFileInputChange = (prop) => (event) => {
        const { files } = event.target;
        setLoading(prop);
        setTimeout(() => {
            setLoading('')
            if (prop === 'mk10') {
                setMk10File(files[0]);
            } else if (prop === 'mk12') {
                setMk12File(files[0]);
            } else if (prop === 'entrance') {
                setEntranceFile(files[0]);
            }
        }, 1500);
    }

    const { userDetails } = useData();
    console.log(userDetails);
    const CannotApply = () => {
        return (
            <div className="cannotapply__container">
                <h5>Cannot apply without having account</h5>
                <p>
                    You donot have account in Bank of India to continue with the loan
                    application please create an account
                </p>
                <div className="cannotapply__action">
                    <Button
                        variant='contained'
                        style={{
                            background: '#4285f4',
                            color: '#FFFFFF',
                            height: '50px',
                        }}
                        onClick={() => history.push('/createAccount')}
                    >Create Account</Button>
                    <p>Already have an acount?</p>
                </div>
            </div>
        )
    }

    const SelectedBankDetails = ({ hasAccount }) => {
        return (
            <div className={hasAccount ? "selectedbank" : "selectedbank disabled"}>
                <h5 className="selectedbank__bank-name">
                    {userDetails.selectedLoan.bankName}
                </h5>
                <p className="selectedbank__max-amount">
                    <span>Max amount:</span>
                    Rs. {userDetails.selectedLoan.maxAmount}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    <p className="selectedbank__duration">
                        <span>Repayment After</span>
                        {userDetails.selectedLoan.duration} years
                    </p>
                    <p className="selectedbank__interest">
                        <span>Rate of Interest</span>
                        {userDetails.selectedLoan.interestRate} p.c.p.a*
                    </p>
                </div>
                <p className="loanopt__colatral selected_colatral">* If collatoral of {userDetails.selectedLoan.colatral} then reduced rate of interest {(userDetails.selectedLoan.interestRate * 0.7).toFixed(2)} pcpa</p>
                <hr></hr>
                <p className="selected_declaration">
                    The financial data of all the accounts linked to your phone number is being shared with
                    verified nationalized banks and we ensure the security of your data
                </p>
            </div>
        )
    }

    const PreviewInfo = () => {
        return (
            <>
                <h4 className="cont-title">Personal Details</h4>
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
                        label="Last Name"
                        variant="filled"
                        defaultValue={userDetails.lname}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                        defaultValue={userDetails.email}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Phone Number"
                        variant="filled"
                        defaultValue={userDetails.phoneNum}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Adhar Number"
                        variant="filled"
                        defaultValue={userDetails.adharNum}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="PAN Number"
                        variant="filled"
                        defaultValue={userDetails.panNum}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <hr className="seperator" />

                <h4 className="cont-title">Educational Details</h4>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="10th %"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.percent10}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="12th %"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.percent12}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '66%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Examination appeared for"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.entranceExamName}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Marks Scored"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.examMarks}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '66%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="College of admission"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.collegeName}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%' }}
                        id="filled-basic"
                        label="Fee Estimate"
                        variant="filled"
                        defaultValue={userDetails.educationalDetails.expectedFee}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <hr className="seperator" />

                <h4 className="cont-title">Bank Details</h4>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '66%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Bank Name"
                        variant="filled"
                        defaultValue={userDetails.selectedBank.bankName}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <div className="textbox">
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="Account Number"
                        variant="filled"
                        defaultValue={userDetails.selectedBank.accountNum}
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        size="small"
                        sx={{ width: '33%', paddingRight: '2rem' }}
                        id="filled-basic"
                        label="IFSC Code"
                        variant="filled"
                        defaultValue={userDetails.selectedBank.ifscCode}
                        InputProps={{ disableUnderline: true }}
                    />
                </div>
                <hr className="seperator" />

                <h4 className="cont-title">Documents Upload</h4>
                <div className="textbox">
                    <div className="uploaddoc__container">
                        <p className="uploaddoc__filename">10th Marksheet <span>Size upto 5Mb allowed</span></p>
                        <div className="uploaddoc__box">
                            {
                                mk10File ? <p style={{ color: '#2F80ED', cursor: 'pointer' }}>{mk10File.name}</p> : <p>No file uploaded</p>
                            }

                            <input
                                onChange={onFileInputChange('mk10')}
                                style={{ display: 'none' }}
                                id="mk10-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="mk10-button-file">
                                <Button component="span">
                                    {
                                        loading === 'mk10' ? <CircularProgress size='24px' /> : 'Upload from device'
                                    }
                                </Button>
                            </label>
                        </div>
                    </div>
                    <div className="uploaddoc__container">
                        <p className="uploaddoc__filename">12th Marksheet <span>Size upto 5Mb allowed</span></p>
                        <div className="uploaddoc__box">
                            {
                                mk12File ? <p style={{ color: '#2F80ED', cursor: 'pointer' }}>{mk12File.name}</p> : <p>No file uploaded</p>
                            }
                            <input
                                onChange={onFileInputChange('mk12')}
                                style={{ display: 'none' }}
                                id="mk12-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="mk12-button-file">
                                <Button component="span" >
                                    {
                                        loading === 'mk12' ? <CircularProgress size='24px' /> : 'Upload from device'
                                    }
                                </Button>
                            </label>
                        </div>
                    </div>
                    <div className="uploaddoc__container">
                        <p className="uploaddoc__filename">Entrance Exam result <span>Size upto 5Mb allowed</span></p>
                        <div className="uploaddoc__box">
                            {
                                entranceFile ? <p style={{ color: '#2F80ED', cursor: 'pointer' }}>{entranceFile.name}</p> : <p>No file uploaded</p>
                            }

                            <input
                                onChange={onFileInputChange('entrance')}
                                style={{ display: 'none' }}
                                id="entrance-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="entrance-button-file">
                                <Button component="span" >
                                    {
                                        loading === 'entrance' ? <CircularProgress size='24px' /> : 'Upload from device'
                                    }
                                </Button>
                            </label>
                        </div>
                    </div>
                </div>
                <Button type='submit' variant='contained'
                    style={{
                        float: 'right',
                        background: '#4285f4',
                        color: '#FFFFFF',
                        height: '50px',
                        margin: '2rem 4rem',
                        padding: '1rem 2rem'
                    }}
                onClick={handleSubmit}
                >Submit</Button>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Box sx={{ width: '80%', margin: '1rem auto' }}>
                <div className="box">
                    <div className="container">
                        <h4>Loan Application</h4>
                        {
                            userDetails.selectedBank && userDetails.selectedLoan && userDetails.selectedBank.bankName === userDetails.selectedLoan.bankName ?
                                <>
                                    <SelectedBankDetails hasAccount={true} />
                                    <PreviewInfo />
                                </>
                                :
                                <>
                                    {
                                        userDetails.selectedLoan ?
                                            <>
                                                <CannotApply />
                                                <SelectedBankDetails hasAccount={false} />
                                            </>
                                            :
                                            <div className="cannotapply__container">
                                                <h5>Please select a loan to apply</h5>
                                            </div>
                                    }
                                </>
                        }
                    </div>
                </div>
            </Box>
        </>
    )
}

export default ApplyLoan
