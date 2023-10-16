import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolios";

function App() {
  return (
    <div className="App">
      <Route exact path="/" element={<Portfolio />} />
    </div>
  );
}

export default App;
