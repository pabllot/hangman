import { useState } from "react"
import words from './wordList.json'
import './styles.css'
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing"
import HangmanWord from "./HangmanWord/HangmanWord"
import Keyboard from "./Keyboard/Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) 
    
  return (
    <div className="mainContainer">
      <div className="header">Lose Win</div>
      <HangmanDrawing />
    
    
     </div>
  )
}

export default App
