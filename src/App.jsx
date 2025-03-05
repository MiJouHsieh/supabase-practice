import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "/src/components/pages/Home";
import { Login } from "/src/components/pages/Auth/Login";
import { SignUp } from "/src/components/pages/Auth/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
