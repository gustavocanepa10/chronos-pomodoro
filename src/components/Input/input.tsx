
type InputProps = {
    type : string
    

}

export function Input({type}: InputProps) {
    return  (
        <>
          <label htmlFor="input">
              task
            </label>
            <input type= {type} id="input" />
        </>
        
          
        

    )
    
}