import { Container } from "../../components/Container/Container";

import { MainTemplate } from "../../Template/MainTemplate";


import styles from './pomodoro.styles.module.css'



export function AboutPomodoro() {
    return (
        <Container>

        <MainTemplate>

        <div className={styles.pomodoro}>
  
    <h2>A Técnica Pomodoro 🍅</h2>
    <p>
      A Técnica Pomodoro é uma metodologia de produtividade criada por Francesco Cirillo. Ela consiste em dividir o trabalho em blocos de tempo (os famosos "Pomodoros") intercalados com pausas. O objetivo é manter o foco total por um período curto e garantir descansos para evitar o cansaço mental.
    </p>


  
    <h3>Como funciona o Pomodoro tradicional?</h3>
    <ol>
      <li>Defina uma tarefa que você deseja realizar.</li>
      <li>Trabalhe nela por 25 minutos sem interrupções.</li>
      <li>Faça uma pausa curta de 5 minutos.</li>
      <li>A cada 4 ciclos, faça uma pausa longa (geralmente de 15 a 30 minutos).</li>
    </ol>
  

 
    <h3>Mas no Chronos Pomodoro tem um diferencial 🚀</h3>
    <p>Nosso app segue o conceito original, mas com algumas melhorias e personalizações para deixar o processo ainda mais eficiente:</p>

    <ul>
      <li>
        <strong>⚙️ Personalização do tempo:</strong> você pode configurar o tempo de foco, descanso curto e descanso longo como quiser! Basta acessar a página de configurações.
      </li>
      <li>
        <strong>🔁 Ciclos organizados em sequência:</strong> a cada ciclo completado, uma nova tarefa é adicionada automaticamente ao seu histórico, e o app já sugere o próximo ciclo.
        <ul>
          <li>Ciclos ímpares: Trabalho (foco).</li>
          <li>Ciclos pares: Descanso curto.</li>
          <li>Ciclo 8: Descanso longo especial, para resetar o ciclo completo.</li>
        </ul>
      </li>
      <li>
        <strong>🍅 Visualização dos ciclos:</strong> logo abaixo do cronômetro, você verá bolinhas coloridas representando os ciclos:
        <ul>
          <li>🟡 Amarelo: Ciclo de trabalho (foco).</li>
          <li>🟢 Verde: Descanso curto.</li>
          <li>🔵 Azul: Descanso longo (a cada 8 ciclos).</li>
        </ul>
        <p>Assim, você sempre sabe em que parte do processo está e o que vem a seguir — sem precisar anotar ou calcular de cabeça!</p>
      </li>
      <li>
        <strong>📊 Histórico automático:</strong> todas as tarefas e ciclos concluídos ficam salvos no histórico com status de completas ou interrompidas. Você pode acompanhar sua evolução ao longo do tempo.
      </li>
    </ul>
  

  
    <h3>Por que usar o Chronos Pomodoro?</h3>
    <ul>
      <li>✅ Organize seu foco com clareza.</li>
      <li>✅ Trabalhe e descanse na medida certa.</li>
      <li>✅ Personalize seus próprios ciclos e tempos.</li>
      <li>✅ Acompanhe seu histórico automaticamente.</li>
    </ul>
    <p><strong>Pronto pra focar?</strong> Bora voltar para a página inicial e iniciar seus Pomodoros! 🍅🚀</p>
    <blockquote>
      "Foco total, sem pressa, sem pausa, só vai!" 💪🧘‍♂️
    </blockquote>
  
</div>


            

        

       

       </MainTemplate>

       

        

        </Container>
       
      );
}