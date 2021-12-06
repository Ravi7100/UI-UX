import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Router>
    <div className="App">
     
    <Route exact path="/" component={Dashboard } />
    <Switch>
    <Route exact path="/Login" component={Dashboard} />
      
    </Switch>   
    </div>
    </Router>
  );
}

export default App;
