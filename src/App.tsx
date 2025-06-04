import "./styles/theme.css";
import "./styles/global.css";
import { Logo } from "./components/Logo/Logo";

import { Container } from "./components/Container/Container";
import { Menu } from "./components/Menu/Menu";
import { CirclePlayIcon, StopCircleIcon } from "lucide-react";
import { CountDown } from "./components/CountDown/CountDown";
import { Input } from "./components/Input/input";
import { Cycles } from "./components/Cycles/Cycles";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Container>
        <Logo />

        <Menu />

        <CountDown />

        <form className="form" action="">
          <div className="formRow">
            <Input  placeholder="Ex : estudar para a prova" labelText="task" id="input" type="string" />
          </div>
          <div className="formRow">Lorem ipsum dolor sit amet.</div>

          <div className="formRow">
           <Cycles/>
          </div>

          <div className="formRow">
           <Button  type="submit">
            <CirclePlayIcon  size={32}/>
            
           </Button>
            <Button color="red"  type="submit">
            <StopCircleIcon  size={32}/>
            
           </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
