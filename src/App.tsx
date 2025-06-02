import "./styles/theme.css"
import "./styles/global.css"
import { Heading } from "./components/Heading/Heading"
import {HistoryIcon, HomeIcon, SettingsIcon, SunIcon, Timer, TimerIcon} from "lucide-react"
import { Container } from "./components/Container/Container"



function App() {
  
  return (
    <Container>
      <Heading>
        <a>
          <TimerIcon size={64} color="#10b981" />
        
         
        <span>
          Chronos
        </span>
        </a>
        
        
          

        
       
        
      </Heading>
      

    </Container>
    
      
    
     
    
  )
}

export default App