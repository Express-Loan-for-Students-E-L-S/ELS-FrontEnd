import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Navbar from '../components/Navbar'
import PersonalDetails from '../components/PersonalDetails';
import Identification from '../components/Identification';
import UploadDocuments from '../components/UploadDocuments';
import SelectType from '../components/SelectType';

const steps = ['Personal Details', 'Identification', 'Upload Photo', 'Account'];

const CreateAccount = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const GetCurrentStep = () => {
        switch (activeStep) {
            case 0:
                return <PersonalDetails handleNext={handleNext} />
            case 1:
                return <Identification handleBack={handleBack} handleNext={handleNext} />
            case 2:
                return <UploadDocuments handleBack={handleBack} handleNext={handleNext} />
            case 3:
                return <SelectType handleBack={handleBack} handleNext={handleNext} />

            default:
                return <p>hello</p>
        }
    }
    return (
        <div>
            <Navbar />
            <Box sx={{ width: '60%', margin: '3rem auto' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        labelProps.optional = (
                            <Typography variant="caption">
                                {label}
                            </Typography>
                        )
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{"Step " + (index + 1)}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <GetCurrentStep />
                    </React.Fragment>
                )}
            </Box>
        </div>
    )
}

export default CreateAccount
