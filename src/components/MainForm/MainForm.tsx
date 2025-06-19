import { CirclePlayIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { Input } from "../Input/input";



export function MainForm() {
  



    return <form className="form" action="">
      
          <div className="formRow">
            <Input  placeholder="Ex : estudar para a prova" labelText="task :" id="input" type="string" />
          </div>
          <div className="formRow"></div>

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