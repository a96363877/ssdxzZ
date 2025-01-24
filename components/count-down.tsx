'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ days, hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 text-center bg-blue-600 text-white rounded-t-lg overflow-hidden">
      <div className="p-2 border-l border-blue-500">
        <div className="text-xl font-bold">{timeLeft.days}</div>
        <div className="text-xs">أيام</div>
      </div>
      <div className="p-2 border-l border-blue-500">
        <div className="text-xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">ساعات</div>
      </div>
      <div className="p-2 border-l border-blue-500">
        <div className="text-xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">دقائق</div>
      </div>
      <div className="p-2">
        <div className="text-xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">ثواني</div>
      </div>
    </div>
  )
}
