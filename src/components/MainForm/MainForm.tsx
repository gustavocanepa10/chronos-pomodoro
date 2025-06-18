import { CirclePlayIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { Input } from "../Input/input";
import { useContext } from "react";
import { TaskContext } from "../../Contexts/TaskContext";


export function MainForm() {
  const {state, setState} = useContext(TaskContext)

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining : "23:33"
        
      }
    })
  }



    return <form className="form" action="">
      <button onClick={handleClick} type="button">

        Clicar aqui</button>
          <div className="formRow">
            <Input  placeholder="Ex : estudar para a prova" labelText="task :" id="input" type="string" />
          </div>
          <div className="formRow">{state.formattedSecondsRemaining}</div>

          <div className="formRow">
           <Cycles/>
          </div>

          <div className="formRow">
           <Button  type="submit">
            <CirclePlayIcon  size={32}/>
            
           </Button>
            {/* <Button color="red"  type="submit">
            <StopCircleIcon  size={32}/>
            
           </Button> */}
          </div>
        </form>
    
}