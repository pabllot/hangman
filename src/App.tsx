import { useCallback, useEffect, useState } from "react"
import words from './wordList.json'
import './styles.css'
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing"
import HangmanWord from "./HangmanWord/HangmanWord"
import Keyboard from "./Keyboard/Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]})
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) 
  
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
  
  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div className="mainContainer">
      <div style={{display:'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '200px'}}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', overflow: 'hidden' }}>
          <div className="header">{isLoser ? 'you lost' : ''}{isWinner ? 'you won' : ''}</div>
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </div>
        <div >
          <Keyboard disabled={isLoser || isWinner } activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
        </div>
        </div>
          <div>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
          </div>
    
    
     </div>
  )
}

export default App
