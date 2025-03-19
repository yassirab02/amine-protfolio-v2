"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}): [boolean, RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const frozen = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (frozen.current && freezeOnceVisible) return
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && freezeOnceVisible) {
          frozen.current = true
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, freezeOnceVisible])

  return [isVisible, ref]
}

