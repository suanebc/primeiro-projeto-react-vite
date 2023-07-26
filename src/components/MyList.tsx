const myList = [
  {id: 1, preco: "1.88", value: 'Laranja'},
  {id: 2, preco: "2.00", value: 'Maçã'},
  {id: 3, preco: "0.70", value: 'Mamão'},
  {id: 4, preco: "1.90", value: 'Goiaba'},
  {id: 5, preco: "5.88", value: 'Banana'},
  {id: 6, preco: "1.50", value: 'Uva'}
] 

export default function MyList(){

  let foodList = myList.map((item) => {
    return (
      <div key={item.id}>
        <h4>{item.value} - R$ {item.preco}</h4>
      </div>
    )
  } )

    return (
      <div>
        <h2>Olá, eu sou uma lista !</h2>
        {foodList}
      </div>


    )

  }
