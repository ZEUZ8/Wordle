import { useState } from "react"


const useWordle = (solution) =>{
    const [turn,setTurn] = useState(0)
    const [currentGuess,setCurrentGuess] = useState('')
    const [guesses,setGuesses] = useState([])
    const [history,setHistory] = useState([])
    const [isCorrect,setIsCorrect] = useState(false)

     const formatGuess = ()=>{
        console.log('formating the guewss -----', currentGuess)
     }

     const addNewGuess = ()=>{

     }

     const handleKeyUp = ({key})=>{
        if(key === "Enter"){  
            // only add guess if turn is less than 5
            if(turn >  5){
                console.log('you used all your guesses')
                return

            }
            // do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log('you already tried that word')
                return 
            }
            // check word is 5 char longn
            if(currentGuess.length !== 5){
                console.log('word must be char length loong')
                return
            }
            formatGuess()
        }
        if(key === "Backspace"){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
     }

     return {turn,currentGuess,guesses,isCorrect,handleKeyUp}
}

export default useWordle