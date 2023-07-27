import { useEffect, useState } from "react"
import styles from './fetchData.module.css'


export default function FetchData() {

  const [tasks, setTask] = useState([])



  useEffect(() => {
    async function searchDate() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      const finalResult = await result.json()
      return finalResult
    }
    searchDate().then(res => setTask(res))
  }, [])

  let newTaks = tasks.map((task) => {
    return (
      <ul>
        <li className={styles.myLi} key={task.id}>
          {task.title}
          {task.completed ? <span className={styles.mySpan}>' - CONCLUÍDA'</span> : null}
        </li>
      </ul>
    )
  })
  
  return (
    <div className={styles.myDiv}>

    <h2 className={styles.myText}>Olá, estou usando uma API !</h2>
    {newTaks}
    </div>
  )
}