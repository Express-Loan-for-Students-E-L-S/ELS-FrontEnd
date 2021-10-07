import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import LoanExplore from './pages/LoanExplore';
import CreateAccount from './pages/CreateAccount';
import ApplyLoan from './pages/ApplyLoan';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';

import DataProvider from './context/DataProvider';

function App() {

  const LoanSuccessfull = () => {
    return (
      <>
        <Navbar />
        <Box sx={{ width: '80%', margin: '1rem auto' }}>
          <div className="box">
            <div className="container">
              <h4 style={{color: '#64f37c'}}>Loan Application Successfull</h4>
              <h6 style={{marginBottom: '2rem'}}>You will get a confirmation mail from bank within 2 working days</h6>
            </div>
          </div>
        </Box>
      </>
    )
  }

  const CreateAccountSuccessfull = () => {
    return (
      <>
        <Navbar />
        <Box sx={{ width: '80%', margin: '1rem auto' }}>
          <div className="box">
            <div className="container">
              <h4 style={{color: '#64f37c'}}>Account Creation Application Successful</h4>
              <h6 style={{marginBottom: '2rem'}}>You will get a confirmation mail from bank within 2 working days</h6>
            </div>
          </div>
        </Box>
      </>
    )
  }

  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Login} />
            <Route path="/loanexplore" component={LoanExplore} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/applyloan" component={ApplyLoan} />
            <Route path="/loansuccess" component={LoanSuccessfull} />
            <Route path="/createsuccess" component={CreateAccountSuccessfull} />
            

          </Switch>
        </Router>
      </DataProvider>

    </div>
  );
}

export default App;
