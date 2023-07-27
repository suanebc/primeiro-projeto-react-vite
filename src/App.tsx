
import FetchData from "./components/fetchData/FetchData";
import MyCounter from "./components/myCounter/MyCounter";
import MyList from "./components/myList/MyList";
import SideEffect from "./components/sideEffect/SideEffect";

function App() {

  return (
    <div className="container">
      <MyCounter />
      <hr/>
      <MyList />
      <SideEffect />
     <FetchData />
    </div>
  )
}



export default App
