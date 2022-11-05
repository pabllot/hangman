import './styles.css'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
  return (
    <div className='grid'>
     {KEYS.map(key => {
      const isActive = activeLetters.includes(key)
      const isInactive = inactiveLetters.includes(key)
      return ( <button disabled={disabled} onClick={() => addGuessedLetter(key)} className={`btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`} key={key}>{key}</button>
     )})}
    </div>
  )
}

export default Keyboard