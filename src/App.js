import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./containers/MainPage";
import NotFound from "./containers/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
