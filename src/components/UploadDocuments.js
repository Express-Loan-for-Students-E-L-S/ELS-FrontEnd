import React, { useRef, useState, useEffect } from 'react'
// import './style2.css'
import './newstyles.css';
import { Button } from '@material-ui/core';
import { FileDrop } from 'react-file-drop';
import { useData } from '../context/DataProvider'
import axios from "axios";
import authHeader from "../services/auth-header";

function UploadDocuments({ handleNext, handleBack }) {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null)
    const { userDetails, setUserDetails } = useData()
    const [preview, setPreview] = useState()

    const handleBeforeNext = () => {
        let formData = new FormData();

        formData.append("file", selectedFile);
        formData.append("document", "profile");

        axios.post(
            "http://localhost:8080/api/upload",
            formData,
            { headers: { ...authHeader(), "Content-Type": "multipart/form-data", } }
        ).then(response => {
            setUserDetails({...userDetails, documents: {...userDetails.documents, profile: response.data}})
        })
    }

    const onFileInputChange = (event) => {
        const { files } = event.target;
        setSelectedFile(files[0])
    }

    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        setUserDetails({...userDetails, profilePhoto: objectUrl})

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    return (
        <div className="box">
            <div className="container lg">
                <h4>Upload Photo</h4>
                <h6>Please verify upload your. Allowed format .png, .jpeg</h6>

                <div className="textbox">
                    <input
                        onChange={onFileInputChange}
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                    />
                    <div className="dragdrop__container">
                        <FileDrop
                            onTargetClick={onTargetClick}
                            onDrop={(files, event) => setSelectedFile(files[0])}
                        >
                            Drop your file here
                        </FileDrop>
                    </div>
                {selectedFile &&  <>
                    <p style={{margin: '1rem 0 8px'}}>File Preview :</p>
                    <img src={preview} width="200px" />
                </> }
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
                        onClick={handleBeforeNext}
                    >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default UploadDocuments
