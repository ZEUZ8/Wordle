import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({solution}) {
    const {currentGuess ,handleKeyUp} = useWordle()

    useEffect(()=>{
        window.addEventListener("keyup",handleKeyUp)

        return ()=> window.removeEventListener("keyup",handleKeyUp)
    },[handleKeyUp])


  return (
    <div>current Guess - {currentGuess}</div>
  )
}
