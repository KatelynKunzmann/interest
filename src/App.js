import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';
import Verify from './Pages/Verify';
import Visual from './Pages/Visual';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/form" element={<Form></Form>} />
        <Route path="/verify" element={<Verify></Verify>} />
        <Route path="/visual" element={<Visual></Visual>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </Router>
  );
}
export default App;
