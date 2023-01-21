import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/bots")
    .then((data) => setData(data))
  },[])
console.log(data)


  return (
    <div className="App">
      <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
