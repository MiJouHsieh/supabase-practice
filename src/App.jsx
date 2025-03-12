import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "/src/components/pages/Home";
import { Login } from "/src/components/pages/Auth/Login";
import { SignUp } from "/src/components/pages/Auth/SignUp";
import { AddPost } from "/src/components/pages/Post/AddPost";
import { SinglePost } from "/src/components/pages/Post/SinglePost";
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
            <Route exact path="/addpost" element={<AddPost />} />
            <Route exact path="/singlepost/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;