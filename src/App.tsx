import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/PageHome";
import { AboutPomodoro } from "./pages/Pomodoro";
import {Routes, Route} from "react-router"


function App() {
  return <Routes>
    <Route index path="/" element = {<Home/>}  />
    <Route path="about-pomodoro" element = {<AboutPomodoro/>}  />

    </Routes>
}

export default App;
