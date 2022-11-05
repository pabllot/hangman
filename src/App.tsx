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
      <div style={{display:'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '200px'}}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', overflow: 'hidden' }}>
          <div className="header">Lose Win</div>
          <HangmanDrawing />
        </div>
        <div >
          <Keyboard />
        </div>
        </div>
          <div>
            <HangmanWord />
          </div>
    
    
     </div>
  )
}

export default App
