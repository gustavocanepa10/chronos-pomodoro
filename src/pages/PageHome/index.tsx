import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/CountDown";
import { MainForm } from "../../components/MainForm/MainForm";
import { MainTemplate } from "../../Template/MainTemplate";







export function Home() {
    return (
        <Container>

        <MainTemplate>

        <CountDown/>

        <MainForm/>

       </MainTemplate>

       

        

        </Container>
       
      );
}