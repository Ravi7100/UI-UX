
import './App.css';
// import {Link} from 'react-router-dom'
import Login from './Components/Login';
import Reset from './Components/Reset';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <Router>
    <div className="App">
     {/* <title>DBS</title> */}
    
    <Route exact path="/" component={Login } />
    <Switch>
    <Route exact path="/Login" component={Login} />
      <Route exact path="/Reset" component={Reset} />
      <Route exact path="/Signup" component={Signup} />
      
    </Switch>   
    </div>
    </Router>
  );
}

export default App;
