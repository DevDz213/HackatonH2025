"use client"

import { useEffect, useState } from "react"

export default function EnhancedTitle() {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="absolute top-8 left-0 right-0 flex items-center justify-center z-10 transition-opacity duration-1000"
      style={{ opacity }}
    >
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 tracking-wide px-4 py-2">
        The Forest Around The World
      </h1>
    </div>
  )
}

