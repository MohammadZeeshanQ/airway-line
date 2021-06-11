import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './components/Index.js'
import Navigation from './shared/NavBar.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
