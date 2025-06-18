import { useContext } from "react";
import styles from "./CountDown.module.css";
import { TaskContext } from "../../Contexts/TaskContext";





export function CountDown() {

  const {state} = useContext(TaskContext)
  


  return <div className={styles.Countdown}> {state.formattedSecondsRemaining} </div>;
}
