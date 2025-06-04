import "./styles/theme.css";
import "./styles/global.css";
import { Logo } from "./components/Logo/Logo";

import { Container } from "./components/Container/Container";
import { Menu } from "./components/Menu/Menu";

import { CountDown } from "./components/CountDown/CountDown";
import { Input } from "./components/Input/input";

function App() {
  return (
    <>
    <Container>
      
        <Logo/>
      
          
       
     
        <Menu/>

      

      
        <CountDown/>



        <form className="form" action="">
          <div className="formRow">
           <Input type="number"/>
          </div>
          <div className="formRow">
            Lorem ipsum dolor sit amet.
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>000000</p>
            

          </div>

          <div className="formRow"> 
            <button>
              Enviar
            </button>
          </div>

        </form>

      
        

        
          
        
      
    </Container>
    </>
    
  );
}

export default App;
