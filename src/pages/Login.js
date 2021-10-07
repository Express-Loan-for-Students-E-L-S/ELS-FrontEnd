import React, {useState} from 'react'
// import './style.css';
import '../components/newstyles.css';
import signup from '../components/assets/signup.png'
import { Grid, TextField, Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import { useData } from '../context/DataProvider';
import Alert from '@mui/material/Alert';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState("");

    const { login } = useData();
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            setMessage("");
            login(email, password)
            .then(
                () => {
                    history.push("/loanexplore");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
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
                <img className="signup_img" alt="simg" src={signup}></img>
            </div>
            <div className="pg_right">
                {message !== "" && <div style={{ width: "100%", padding: '0px 0px 32px' }}><Alert severity="error">{message}</Alert></div>}
                <h3>LogIn</h3>
                <h6 style={{ paddingBottom: '1rem' }}>We communicate with banks on your behalf so that you can enjoy quick personalized loan recommendations</h6>
                <div class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" alt="gimg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p class="btn-text">Log in with google</p>
                </div>
                <Grid className="form">
                    <form>
                        <TextField
                            fullWidth id="outlined-basic" label="Enter Email" variant="filled"
                            style={{
                                paddingBottom: '2rem',
                            }}
                            required InputProps={{ disableUnderline: true }}
                            value={email} onChange={e => setEmail(e.target.value)}
                        />

                        <TextField fullWidth id="outlined-basic" label="Enter Password" variant="filled"
                            style={{
                                paddingBottom: '2rem',
                            }}
                            required InputProps={{ disableUnderline: true }}
                            value={password} onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <div className="frgtpass" style={{ paddingBottom: '2rem', textAlign: 'right' }}>
                            <a href="/signin" style={{ color: '#4285f4' }}>Forgot Password?</a>
                        </div>

                        <Button fullWidth type='submit' variant='contained'
                            style={{
                                background: '#4285f4',
                                color: '#FFFFFF',
                                height: '50px',
                            }} 
                            onClick={handleLogin}
                        >Continue</Button>

                    </form>


                </Grid>
                <div className="text" id="logintext" >
                    <p>Do not have an Account? <Link to='/signup' style={{ color: '#4285f4' }}>Create an Account</Link></p>
                </div>


            </div>
        </div>
    )
}

export default Login;
