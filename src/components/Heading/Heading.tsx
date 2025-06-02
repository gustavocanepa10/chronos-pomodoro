
import styles from "./Heading.module.css";


type HeadingProps = {
    children : React.ReactNode
}


export function Heading({children} : HeadingProps) {
    console.log(styles)
    
    return  <div className= {styles.heading}>
        
            

        
        <div className= {styles.heading}>
             {children}
        </div>
       
       </div>
}