

import styles from "./Menu.module.css";

import {
  HistoryIcon,
  HomeIcon,
  SettingsIcon,
  SunIcon,
  
} from "lucide-react";





export function Menu() {
    return (
        <nav className= {styles.menu}>
            <a href="#">
            <HistoryIcon color="#000" />
          </a>
          <a href="#">
            <HomeIcon color="#000" />
          </a>
          <a href="#">
            <SettingsIcon color="#000" />
          </a>
          <a href="#">
            <SunIcon color="#000" />
          </a>

        </nav>
    )
}