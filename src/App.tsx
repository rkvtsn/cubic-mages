import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomeBoard from "./pages/WelcomeBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
