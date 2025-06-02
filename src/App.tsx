import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading/Heading";
import {
  HistoryIcon,
  HomeIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";
import { Container } from "./components/Container/Container";
import { Menu } from "./components/Menu/Menu";
import { Content } from "./components/Content/Content";

function App() {
  return (
    <Container>
      <Content>
        <Heading>
          <a>
            <TimerIcon size={64} color="#10b981" />

            <span>Chronos</span>
          </a>
        </Heading>

        <Menu>
          <a>
            <HistoryIcon color="#000" />
          </a>
          <a>
            <HomeIcon color="#000" />
          </a>
          <a>
            <SettingsIcon color="#000" />
          </a>
          <a>
            <SunIcon color="#000" />
          </a>
        </Menu>
      </Content>
    </Container>
  );
}

export default App;
