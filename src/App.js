import logo from './logo.svg';
import './App.css';
import User from './User'
//alert("hello")

function App() {

  let data = "anil sidhu"
  function Apple(){
    let data = "peter"
    alert(data)
  }

  return (
    <div className='App'>
       <h1>{data}</h1>
      <button onClick={Apple}>touch me</button>
       <Apple />
       <User />
    </div>
  )
}

export default App;
