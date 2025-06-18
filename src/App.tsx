import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { AboutPomodoro } from "./pages/aboutPomodoro";
import { Routes, Route } from "react-router";
import { TaskContextProvider } from "./Contexts/TaskContext";

// export type TaskStateModel = {
//     tasks : TaskModel[]; // historico, MainForm
//     secondsRemaining : number; // CountDown, historico, MainForm, button
//     formattedSecondsRemaining : string; // titulo, CountDown
//     activeTask : TaskModel | null; // CountDown, historico, MainForm, button
//     currentCycle : number; // Home
//     config : {
//         workTime : number;  //  MainForm
//         shortBreakTime : number;  //  MainForm
//         longBreakTime : number;  //  MainForm
//     };

// }



function App() {
 

  
  return (
    <TaskContextProvider>
      <Routes>
      <Route
        index
        path="/"
        element={<Home />}
      />
      <Route path="about-pomodoro" element={<AboutPomodoro  />} />
    </Routes>
    </TaskContextProvider>
    
  );
}

export default App;
