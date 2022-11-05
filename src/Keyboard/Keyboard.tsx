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


const Keyboard = () => {
  return (
    <div className='grid'>
     {KEYS.map(key => (
      <button className='btn' key={key}>{key}</button>
     ))}
    </div>
  )
}

export default Keyboard