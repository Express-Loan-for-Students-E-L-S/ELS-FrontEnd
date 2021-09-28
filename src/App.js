import './App.css';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
                <Switch>
                    <Route path="/" exact component={ Welcome} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Login} />
                   
                </Switch>
            </Router>

    </div>
  );
}

export default App;
