import styles from "./Button.module.css"

type ButtonProps = React.ComponentProps<"button"> & {
    children : React.ReactNode,
    color? : 'green' | 'red'
    
}



export function Button({children, color = 'green'} : ButtonProps) {
    return <button className= {`${styles.button} ${styles[color]}`}>
       {children} 
    </button>
}