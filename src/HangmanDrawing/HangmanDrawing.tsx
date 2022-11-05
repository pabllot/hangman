import './styles.css'

const HEAD = <div className='head' />
const BODY = <div className='body' />
const RIGHT_ARM = <div className='rightArm' />
const LEFT_ARM = <div className='leftArm' />
const RIGHT_LEG = <div className='rightLeg' />
const LEFT_LEG = <div className='leftLeg' />

const HangmanDrawing = () => {
  return (
    <div className='container'>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div className='hangerBar'/>
        <div className='topBar'/>
        <div className='verticalBar' />
        <div className='bottomBar' />
    </div>
  )
}

export default HangmanDrawing