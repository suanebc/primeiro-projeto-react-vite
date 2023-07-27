
import FetchData from "./components/fetchData/FetchData";
import MyCounter from "./components/MyCounter";
import MyList from "./components/MyList";
import SideEffect from "./components/SideEffect";

function App() {

  return (
    <div className="container">
      <MyCounter />
      <MyList />
      <SideEffect />
     <FetchData />
    </div>
  )
}



export default App
