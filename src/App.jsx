import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "/src/components/pages/Home";
import { Login } from "/src/components/pages/Auth/Login";
import { SignUp } from "/src/components/pages/Auth/SignUp";
import { AuthProvider } from "src/context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;