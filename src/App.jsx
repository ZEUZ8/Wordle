import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
import "./App.css";
function App() {
  const [solution,setSolutions] = useState(null)
  // const [word, setWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/solutions")
    .then(res => res.json())
    .then(json =>{
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolutions(randomSolution)
      console.log(randomSolution)
    })
  }, [setSolutions]);

  return (
    <>
      <h1>Wordle App</h1>
      {solution && <Wordle solution={solution}/>}
    </>
  );
}

export default App;
