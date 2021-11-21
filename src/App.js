import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

export default App;
