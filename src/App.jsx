import Navigation from "./components/Navigation";
import Home from "./components/Home";
import New from "./components/New";
import Flash from "./components/Flash";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="top">
        <Home />
        <New />
      </div>
      <Flash />
    </div>
  );
}

export default App;
