import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/pokemon/:name">
        <Details />
      </Route>
    </Switch>
  </>
);

export default App;
