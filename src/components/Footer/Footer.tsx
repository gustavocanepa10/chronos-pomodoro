import styles from "./Footer.module.css";


export function Footer() {
  return <footer className={styles.footer}>
    <a href="about-pomodoro">Entenda a técnica pomodoro 🍎</a>
    <a href="">Chronos Pomodoro &copy; -  {new Date().getFullYear()}
      </a>

  </footer>;
}
