import React, {useState} from 'react'

import Step2 from './Step2'
import Otpverify from './Otpverify'
import Bankacc from './Bankacc'

const AccountDetails = ({ handleNext, handleBack }) => {
    const [stageNo, setStageNo] = useState(0)

    const GetCurrentStage = () => {
        if(stageNo === 0) {
            return <Step2 setStageNo={setStageNo} handleBack={handleBack} />
        } else if(stageNo === 1) {
            return <Otpverify setStageNo={setStageNo} handleBack={handleBack} />
        } else {
            return <Bankacc handleNext={handleNext} handleBack={handleBack} />
        }
    }

    return (
        <GetCurrentStage />
    )
}

export default AccountDetails
