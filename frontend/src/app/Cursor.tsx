"use client"
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = {
    damping: 40,
    stiffness: 1100
  }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig) 

  const [isHoveringh1, setIsHoveringh1] = useState(false)
  const [isHoveringa, setIsHoveringa] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15)
      cursorY.set(e.clientY - 15)
    

      const h1Elements = document.querySelectorAll('h1')
      const isHovering = Array.from(h1Elements).some((h1) => {
        const rect = h1.getBoundingClientRect() 
        return (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        )
      });
      setIsHoveringh1(isHovering)
    
     const liElements = document.querySelectorAll('a')
      const isHoveringa = Array.from(liElements).some((a) => {
        const rect = a.getBoundingClientRect() 
        return (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        )
      });
      setIsHoveringa(isHoveringa)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)     
    }     
  }, []) 
  return (
    <>
      <motion.div
        className={`${isHoveringa ? '' : 'cursor-dot'}`}
        style={{
          translateX: cursorXSpring, 
          translateY: cursorYSpring,
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: 1, 
          scale: isHoveringh1 ? 12 : isHoveringa ? 0 : 3 
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          opacity: { duration: 0.1 }, // Adjust duration as needed
          scale: { duration: isHoveringa ? 0.2 : 0.5 }, // Adjust duration as needed
        }}
      />
    </>
  ) 
}

export default Cursor 


