import './styles.css'

type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({ wordToGuess, guessedLetters }: HangmanWordProps) => {

  return (
    <div className='wordContainer'>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: '.1em solid white'}} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord