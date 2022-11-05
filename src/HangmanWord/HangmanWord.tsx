import './styles.css'

const HangmanWord = () => {
  const word = 'opportunity'
  const guessedLetters = ['e']


  return (
    <div className='wordContainer'>
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: '.1em solid white'}} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord