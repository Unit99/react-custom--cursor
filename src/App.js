import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

const App = () => {

  const[mousePosition, setMousePosition] = useState({x:0, y: 0})
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(()=>{
    const mouseMove = e=>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return ()=>{
      window.addEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default:{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text:{
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
    <div className='app'>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Hello world</h1>
      <motion.div 
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}

export default App
