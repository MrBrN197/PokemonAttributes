import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';

const App = () => (
  <Switch>
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Route path="/details">
      <Details />
    </Route>
  </Switch>
);

export default App;
