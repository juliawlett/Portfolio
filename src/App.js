import Portfolio from "./pages/Portfolios";

function App() {
  return (
    <div className="App">
      <Route exact path="https://portfolio-sigma-blush-98.vercel.app/" element={<Portfolio />} />
    </div>
  );
}

export default App;
