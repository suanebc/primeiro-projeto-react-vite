import { useEffect, useState } from "react"
import styles from './span.module.css'


const myTasks = [
  { id: 1, title: 'ir ao mercado' },
  { id: 2, title: 'dar remédio ao cachorro' },
  { id: 3, title: 'ligar para mãe' },
  { id: 4, title: 'fazer bolo de aniversário' }
]


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
        <li key={task.id}>
          {task.title}
          {task.completed ? <span className={styles.mySpan}>' - CONCLUÍDA'</span> : null}
        </li>
      </ul>
    )
  })
  
  return (
    <div className="container-fetch">

    <h2 className="text-fetch">Olá, estou usando uma API !</h2>
    {newTaks}
    </div>
  )
}