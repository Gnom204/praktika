import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreInfoRobot from "./components/MoreInfoRobot/MoreInfoRobot";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/robot/:robotId" element={<MoreInfoRobot />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
