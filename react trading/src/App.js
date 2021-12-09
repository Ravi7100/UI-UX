import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trade from './Components/Trade'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home'
function App() {
  return (
    <Router>
    <div className="App">
     
    <Route exact path="/" component={Home} />
    <Switch>
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/Trade" component={Trade} />
    <Route exact path="/Home" component={Home} />
    </Switch>   
    </div>
    </Router>
  );
}

export default App;
