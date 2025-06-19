import {createContext,useContext,useState,type SetStateAction} from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";



// Tipo de dentro do Contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<SetStateAction<TaskStateModel>>;
};


// Tipagem e definição do estado inicial
const initialTaskState: TaskStateModel = {
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



const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};



// TaskContextProps que é o tipo que o contexto vai receber como valor
// initialContextValue é o valor padrão se o mesmo não tiver nenhum valor
export const TaskContext = createContext<TaskContextProps>(initialContextValue);



type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {


    // valor inicial do state 
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function UseTaskContext() {
  return useContext(TaskContext);
}
