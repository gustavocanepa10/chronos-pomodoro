
import styles from "./Heading.module.css";


type HeadingProps = {
    children : string
}


export function Heading({children} : HeadingProps) {
    console.log(styles)
    
    return  <div className= {styles.heading}>
        <h1 className= {styles.heading}>
             {children}
        </h1>
       
       </div>
}