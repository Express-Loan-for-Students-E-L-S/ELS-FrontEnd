import React, { useState } from 'react'
// import './style2.css'
import './newstyles.css';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import { useData } from '../context/DataProvider'
import CircularProgress from '@mui/material/CircularProgress';

function Identification({ handleNext, handleBack }) {
    const [adharFile, setAdharFile] = useState()
    const [panFile, setPanFile] = useState()
    const [loading, setLoading] = useState('');

    const onFileInputChange = (prop) => (event) => {
        const { files } = event.target;
        // setSelectedFile({...selectedFile, [prop]: files[0]})
        setLoading(prop);
        setTimeout(() => {
            setLoading('')
            if (prop === 'adhar') {
                setAdharFile(files[0]);
            } else if (prop === 'pan') {
                setPanFile(files[0]);
            }
        }, 1800);
        // do something with your files...
    }
    const { userDetails } = useData();
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
                                onChange={onFileInputChange('adhar')}
                                style={{ display: 'none' }}
                                id="adhar-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="adhar-button-file">
                                <Button variant="raised" component="span" >
                                    {
                                        loading === 'adhar' ? <CircularProgress size='24px' /> : 'Upload from device'
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
                                onChange={onFileInputChange('pan')}
                                style={{ display: 'none' }}
                                id="pan-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="pan-button-file">
                                <Button variant="raised" component="span" >
                                    {
                                        loading === 'pan' ? <CircularProgress size='24px' /> : 'Upload from device'
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
