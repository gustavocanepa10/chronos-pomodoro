import type { TaskModel } from "./TaskModel"

// AQUI CONTEM TODOS OS ESTADOS DA APLICAÇÃO
// UM ESTADO GLOBAL

export type TaskStateModel = {
    tasks : TaskModel[]; // histórico, MainForm
    secondsRemaining : number; // CountDown, histórico, MainForm, button
    formattedSecondsRemaining : string; // titulo, CountDown
    activeTask : TaskModel | null; // CountDown, histórico, MainForm, button
    currentCycle : number; // Home
    config : {
        workTime : number;  //  MainForm
        shortBreakTime : number;  //  MainForm
        longBreakTime : number;  //  MainForm
    };


}