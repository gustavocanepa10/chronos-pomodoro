import { createContext, useState, type SetStateAction } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./InitialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<SetStateAction<TaskStateModel>>;
};



const initialContextValue = {
state: initialTaskState,
  setState: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);



type TaskContextProviderProps = {
  children: React.ReactNode;
};





export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
