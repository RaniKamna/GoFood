import './App.css';
import { Home } from './components/screens/Home';
import { Routes, Route } from "react-router-dom";
import { Login } from './components/screens/Login';
import { Register } from './components/screens/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
