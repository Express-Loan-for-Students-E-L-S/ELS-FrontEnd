import React, { useState } from 'react'
// import './style2.css'
import './newstyles.css';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import { useData } from '../context/DataProvider'
import axios from "axios";
import authHeader from "../services/auth-header";
import CircularProgress from '@mui/material/CircularProgress';

function Identification({ handleNext, handleBack }) {
    const [adharFile, setAdharFile] = useState()
    const [panFile, setPanFile] = useState()
    const [loading, setLoading] = useState('');

    const { userDetails, setUserDetails } = useData()

    const uploadAdhar = () => {
        let formData = new FormData();

        formData.append("file", adharFile);
        formData.append("document", "adharcard");

        axios.post(
            "http://localhost:8080/api/upload",
            formData,
            { headers: { ...authHeader(), "Content-Type": "multipart/form-data", } }
        ).then(response => {
            setUserDetails({ ...userDetails, documents: { ...userDetails.documents, adharcard: response.data } })
        })
    }

    const onFileInputChange = (prop) => (event) => {
        const { files } = event.target;
        // setSelectedFile({...selectedFile, [prop]: files[0]})
        setLoading(prop);
        if (prop === 'adharcard') {
            let formData = new FormData();

            formData.append("file", files[0]);
            formData.append("document", "adharcard");

            axios.post(
                "http://localhost:8080/api/upload",
                formData,
                { headers: { ...authHeader(), "Content-Type": "multipart/form-data", } }
            ).then(response => {
                setUserDetails({ ...userDetails, documents: { ...userDetails.documents, adharcard: response.data } })
                setAdharFile(files[0]);
                setLoading('')
            })

        } else if (prop === 'pancard') {
            let formData = new FormData();

            formData.append("file", files[0]);
            formData.append("document", "pancard");

            axios.post(
                "http://localhost:8080/api/upload",
                formData,
                { headers: { ...authHeader(), "Content-Type": "multipart/form-data", } }
            ).then(response => {
                setUserDetails({ ...userDetails, documents: { ...userDetails.documents, pancard: response.data } })
                setPanFile(files[0]);
                setLoading('')
            })
        }
    }
    return (
        <div className="box">
            <div className="container lg">
                <h4>Identification</h4>
                <h6>Please verify your adhar card and Pan card details</h6>

                <div className="textbox">
                    <TextField
                        fullWidth
                        size="small"
                        sx={{
                            paddingBottom: '1.5rem'
                        }}
                        id="filled-basic"
                        label="Adhar Card Number"
                        variant="filled"
                        defaultValue={userDetails.adharNum}
                        InputProps={{ disableUnderline: true }}
                    />
                    <div className="uploaddoc__container">
                        <p className="uploaddoc__filename">Adhar Card <span>Size upto 5Mb allowed</span></p>
                        <div className="uploaddoc__box">
                            {
                                adharFile ? <p style={{ color: '#2F80ED', cursor: 'pointer' }}>{adharFile.name}</p> : <p>No file uploaded</p>
                            }
                            <input
                                onChange={onFileInputChange('adharcard')}
                                style={{ display: 'none' }}
                                id="adhar-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="adhar-button-file">
                                <Button component="span" >
                                    {
                                        loading === 'adharcard' ? <CircularProgress size='24px' /> : 'Upload from device'
                                    }
                                </Button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="textbox">
                    <TextField
                        fullWidth
                        size="small"
                        sx={{
                            paddingBottom: '1.5rem'
                        }}
                        id="filled-basic"
                        label="Pan Card Number"
                        variant="filled"
                        defaultValue={userDetails.panNum}
                        InputProps={{ disableUnderline: true }}
                    />
                    <div className="uploaddoc__container">
                        <p className="uploaddoc__filename">Pan Card <span>Size upto 5Mb allowed</span></p>
                        <div className="uploaddoc__box">
                            {
                                panFile ? <p style={{ color: '#2F80ED', cursor: 'pointer' }}>{panFile.name}</p> : <p>No file uploaded</p>
                            }
                            <input
                                onChange={onFileInputChange('pancard')}
                                style={{ display: 'none' }}
                                id="pan-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="pan-button-file">
                                <Button component="span" >
                                    {
                                        loading === 'pancard' ? <CircularProgress size='24px' /> : 'Upload from device'
                                    }
                                </Button>
                            </label>
                        </div>
                    </div>
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
                        onClick={handleNext}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Identification
