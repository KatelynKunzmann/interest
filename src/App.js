import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';
import Verify from './Pages/Verify';
import Visual from './Pages/Visual';
import Error from './Pages/Error';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/interest" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/visual" element={<Visual/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
export default App;
