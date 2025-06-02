

import styles from "./Menu.module.css";


type MenuProps = {
    children : React.ReactNode
}



export function Menu({children}: MenuProps) {
    return (
        <nav className= {styles.menu}>
            {children}

        </nav>
    )
}