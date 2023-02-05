import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
