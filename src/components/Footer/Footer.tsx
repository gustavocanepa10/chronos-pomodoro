import styles from "./Footer.module.css";
import { Link } from "react-router";


export function Footer() {
  return <footer className={styles.footer}>
    <Link to = "about-pomodoro">Entenda a técnica pomodoro 🍎</Link>
    <a href="">Chronos Pomodoro &copy; -  {new Date().getFullYear()}
      </a>

  </footer>;
}
