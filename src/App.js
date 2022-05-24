import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cal from './Cal';
import { Switch } from 'react-router-dom';
import EditProfile from './EditProfile';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/cal">
            <Cal />
          </Route>
          <Route path="/edit_profile">
            <EditProfile />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
