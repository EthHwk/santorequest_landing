"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function TypewriterEffect({ text, speed = 50, delay = 500, className = "" }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Esperar el delay inicial antes de comenzar a escribir
    const initialTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(initialTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, speed, text])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span
        className={`inline-block w-0.5 h-5 ml-0.5 bg-yellow-400 ${currentIndex < text.length ? "animate-blink" : "opacity-0"}`}
      ></span>
    </div>
  )
}
