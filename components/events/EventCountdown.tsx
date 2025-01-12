"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface CountdownProps {
  targetDate: string
}

export default function EventCountdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="bg-white/10 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm uppercase">{unit}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

