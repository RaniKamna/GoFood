import "./App.css";
import { Home } from "./components/screens/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/screens/Login";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signup } from "./components/screens/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createuser" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
