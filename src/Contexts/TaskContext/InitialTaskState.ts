import type { TaskStateModel } from "../../models/TaskStateModel";


export const initialTaskState: TaskStateModel = {
  tasks: [],
  activeTask: null,
  config: {
    shortBreakTime: 5,
    workTime: 25,
    longBreakTime: 15,
  },
  currentCycle: 0,
  formattedSecondsRemaining: "00:00",
  secondsRemaining: 0,
};