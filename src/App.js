import Homepage from "./components/Homepage";
import CV from "./components/CV";
// import "/App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Resume" component={Homepage} />
        <Route path="/CV" component={CV} />

      </Router>

    </div>
  );
}
export default App;
