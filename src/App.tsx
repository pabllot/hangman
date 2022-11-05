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
      <div style={{display:'flex', width: '100%', justifyContent: 'space-between', gap: '200px'}}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="header">Lose Win</div>
          <HangmanDrawing />
          <HangmanWord />
        </div>
        <div style={{ alignSelf: 'stretch', width: '100%'}}>
          <Keyboard />
        </div>
        </div>
    
    
     </div>
  )
}

export default App
