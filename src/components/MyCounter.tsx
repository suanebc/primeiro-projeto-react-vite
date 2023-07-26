import { useState } from "react"
import styles from '../button.module.css'

export default function MyCounter(){

  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter+1)

  }
  function toDesrease(){
    setCounter(counter-1)
  }

  return (
    <div>
      <h2>Olá, eu sou um contador !</h2>
      {counter == 5 ? <h3>Ok, o valor ideal é 5</h3> : null}
      <h3>{counter}</h3>
      <button className={styles.myButton} onClick={increase}>aumentar</button>
      <button className={styles.myButton} onClick={toDesrease}>diminuir</button>
    </div>
  )

}