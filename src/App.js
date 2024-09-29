import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Sign-in/SignIn";
import Main from "./Component/Main/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Main content for the root route */}
          <Route path="/signup" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
