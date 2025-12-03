'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, HTMLMotionProps } from 'motion/react'

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
  text: string
  initialText?: string
  speed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: 'start' | 'end' | 'center'
  useOriginalCharsOnly?: boolean
  characters?: string
  className?: string
  encryptedClassName?: string
  parentClassName?: string
  animateOn?: 'view' | 'hover' | 'both'
}

export default function DecryptedText({
  text,
  initialText,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(initialText || text)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isScrambling, setIsScrambling] = useState<boolean>(false)
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  const shuffleText = (targetText: string, currentText: string, revealed: Set<number>) => {
    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(targetText.split(''))).filter((c) => c !== ' ')
      : characters.split('')

    return targetText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (revealed.has(i)) return char
        return availableChars[Math.floor(Math.random() * availableChars.length)]
      })
      .join('')
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    let iteration = 0
    let targetText = isHovering ? text : initialText || text

    if (displayText === targetText) return

    setIsScrambling(true)
    setRevealedIndices(new Set())

    interval = setInterval(() => {
      setRevealedIndices((prev) => {
        let newRevealed = new Set(prev)
        if (sequential) {
          for (let i = 0; i < targetText.length; i++) {
            if (!newRevealed.has(i)) {
              newRevealed.add(i)
              break
            }
          }
        }
        setDisplayText(shuffleText(targetText, displayText, newRevealed))
        iteration++
        if (iteration >= maxIterations || newRevealed.size === targetText.length) {
          clearInterval(interval)
          setDisplayText(targetText)
          setIsScrambling(false)
        }
        return newRevealed
      })
    }, speed)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    initialText,
    speed,
    sequential,
    maxIterations,
    characters,
    useOriginalCharsOnly,
  ])

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {}

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, i) => (
          <span
            key={i}
            className={revealedIndices.has(i) || !isScrambling ? className : encryptedClassName}
          >
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  )
}
