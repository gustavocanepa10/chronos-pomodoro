
import styles from "./input.module.css"


type InputProps = React.ComponentProps<"input"> & {
  id: string;
  labelText: string;
};

export function Input({ id, labelText, ...rest }: InputProps) {
  return (
    <>
      <label className= {styles.label} htmlFor="input">{labelText}</label>

      <input className= {styles.input} {...rest} id="input" />
    </>
  );
}
