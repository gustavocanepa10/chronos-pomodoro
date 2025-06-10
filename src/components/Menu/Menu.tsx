import { useState, useEffect } from "react";
import styles from "./Menu.module.css";

import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";

type themesProps = 'dark' | 'light'



export function Menu() {
  const [theme, setTheme] = useState<themesProps>(() => {
    const storageTheme = localStorage.getItem('theme') as themesProps || 'dark'

    return storageTheme
  })

  

  function handleTheme(event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;

    })
    

  }

  useEffect(() => {

    document.documentElement.setAttribute("data-theme" ,  theme)
    localStorage.setItem('theme', theme)

  }, [theme])



  return (
    <nav className={styles.menu}>
      
      <a href="/" aria-label="Ir para a home" title = "Home">
        <HomeIcon color="#000"  />
      </a>
      <a href="#" aria-label="Ver histórico" title = "Histórico">
        < HistoryIcon color="#000"   />
      </a>
      <a href="#" aria-label="Configurações" title = "Configurações">
        <SettingsIcon color="#000"  />
      </a>
      <a href="#"  onClick={handleTheme} aria-label="Mudar de tema" title = "Tema">
      {theme === "dark" ?  <SunIcon  color="#000" /> : <MoonIcon/> }


       
      </a>
    </nav>
  );
}
