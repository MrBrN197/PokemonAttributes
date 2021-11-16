import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';

const App = () => (
  <Switch>
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Route path="/pokemon/:name">
      <Details />
    </Route>
  </Switch>
);

export default App;
