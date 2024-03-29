import { useEffect, useState } from "react"
import './sideEffect.css'

const foods = [
  { id: 1, value: 'Frutas' },
  { id: 2, value: 'Carne' },
  { id: 3, value: 'Arroz' },
  { id: 4, value: 'Feijão' },
  { id: 5, value: 'Macarrão' },
  { id: 6, value: 'Legumes' }
]

export default function SideEffect() {

  const [products, setProducts] = useState(foods)
  const [search, setSearch] = useState('')

  useEffect(
    () =>{
      if(search){
        const newList = foods.filter((item) => {
          return item.value.toLowerCase().includes(search.toLowerCase())
        } )
        setProducts(newList)
      } else {
        setProducts(foods)
      }
    }
  , [search])

  return (
    <div className="divSide">
      <h2 className="textSide">Olá, Faça um pesquisa !</h2>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="pesquise aqui">
        </input>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h4 className="textSide">{item.value}</h4>
          </div>
        )
      })}

    </div>

  )


}