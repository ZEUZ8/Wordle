import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?letters=5", {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        "X-RapidAPI-Key": "a8e96a89efmshc1435e061e16e4fp148869jsnd2de258343b9",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('in the response section')
        console.log(data,'  the dat hae hase')
        const fiveLetterWords = data.words;
        console.log(fiveLetterWords,'  whte words in the input')
      })
      .catch((error) => {
        console.error("Error fetching words:", error);
      });
  }, [1]);

  return (
    <>
      <h1>  Wordle App</h1>
      <p>Guess the five-letter word:</p>
      <p>{word}</p>
      {/* Add your game logic and UI components here */}
    </>
  );
}

export default App;
