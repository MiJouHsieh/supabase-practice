import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "/src/components/pages/Home";


const supabase = createClient(
  "https://ajafksdeulckwiaqtzuj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYWZrc2RldWxja3dpYXF0enVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1ODY2MjcsImV4cCI6MjA1NjE2MjYyN30.EA9JjEL8padkav3yQNV0RzlpMpnpvHXD8UzkOAs5Dvw "
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
