import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollUp from "./components/ScrollUp";
import Swot from "./components/Swot";
import Skill from "./components/Skill";
import HomePage from "./layout/HomePage";

function App() {
  return (
    <HomePage>
      <Home />
      <About />
      <Skill />
      <Qualification />
      <Portfolio />
      <Swot />
      <ScrollUp />
    </HomePage>
  );
}

export default App;
