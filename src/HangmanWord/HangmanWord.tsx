import './styles.css'

type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
  reveal?: boolean
}

const HangmanWord = ({ wordToGuess, guessedLetters, reveal= false }: HangmanWordProps) => {

  return (
    <div className='wordContainer'>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: '.1em solid white'}} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'white'}}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord