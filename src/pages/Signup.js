import React, { useState } from 'react'
// import './style.css';
import '../components/newstyles.css';
import sig from '../components/assets/signup.png'
import { Grid, TextField, Button } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom'
import { useData } from '../context/DataProvider';

function Signup() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const { signup } = useData();

    const handleSignup = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        if (fname !== "" && lname !== "" && email !== "" && password !== "") {
            signup(fname, lname, email, password)
                .then(
                    (response) => {
                        setMessage(response.data.message);
                        setSuccessful(true);
                    },
                    (error) => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setMessage(resMessage);
                        setSuccessful(false);
                    }
                );
        } else {
            setMessage("Please fill all the fields before continuing")
        }
    }


    return (
        <div className="signup">
            <div className="pg_left">
                <div className="header">
                    <h1 className="logo">Express <span>Loans</span></h1>
                </div>
                <img className="signup_img" alt="simg" src={sig}></img>
            </div>
            <div className="pg_right">
                {message !== "" && <div style={{ width: "100%", padding: '16px 0px' }}>{successful ? <Alert severity="success">{message}</Alert> : <Alert severity="error">{message}</Alert>}</div>}
                <h3>Create Account</h3>
                <h6>We communicate with banks on your behalf so that you can enjoy quick personalized loan recommendations</h6>
                <div class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" alt="gimg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p class="btn-text">Sign up with google</p>
                </div>
                <Grid className="form">
                    <form>
                        {/* <TextField fullWidth label='Date of Birth' placeholder="Enter your Date of Birth" /> */}
                        <TextField id="outlined-basic" label="First Name" variant="filled"
                            style={{
                                width: '50%',
                                paddingBottom: '2rem',
                                paddingRight: '2rem',
                            }} required InputProps={{ disableUnderline: true }}
                            value={fname} onChange={e => setFname(e.target.value)}
                        />
                        <TextField id="outlined-basic" label="Last Name" variant="filled"
                            style={{
                                width: '50%',
                                paddingBottom: '2rem',
                            }} required InputProps={{ disableUnderline: true }}
                            value={lname} onChange={e => setLname(e.target.value)}
                        />
                        <TextField fullWidth id="outlined-basic" label="Enter Email" variant="filled"
                            style={{
                                paddingBottom: '2rem',
                            }} required InputProps={{ disableUnderline: true }}
                            value={email} onChange={e => setEmail(e.target.value)}
                        />

                        <TextField fullWidth id="outlined-basic" label="Enter Password" variant="filled"
                            style={{
                                paddingBottom: '2rem',
                            }} required InputProps={{ disableUnderline: true }}
                            value={password} onChange={e => setPassword(e.target.value)}
                            type="password"
                        />

                        <Button fullWidth type='submit' variant='contained'
                            style={{
                                background: '#4285f4',
                                color: '#FFFFFF',
                                height: '50px',
                            }}
                            onClick={handleSignup}
                        >Continue</Button>
                        <div className="text">

                        </div>

                    </form>


                </Grid>
                <div className="text">
                    <p>Already have an Account? <Link to="/signin" style={{ color: '#4285f4' }}>LogIn</Link></p>
                </div>


            </div>
        </div>
    )
}

export default Signup
