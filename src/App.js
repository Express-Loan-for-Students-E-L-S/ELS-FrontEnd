import './App.css';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Otpverify from './components/Otpverify';
import Bankacc from './components/Bankacc';
function App() {
  return (
    <div className="App">
      <Router>
                <Switch>
                    <Route path="/" exact component={ Welcome} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Login} />
                    <Route path="/step1" component={Step1} />
                    <Route path="/step2" component={Step2} />
                    <Route path="/otpverify" component={Otpverify} />
                    <Route path="/bankdetails" component={Bankacc} />
                    
                </Switch>
            </Router>

    </div>
  );
}

export default App;
