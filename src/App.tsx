import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "components/RouterView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterView />
      </div>
    </Router>
  );
}

export default App;
