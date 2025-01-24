"use client"

import { useEffect } from "react"

export function VisitorIdHandler() {
  useEffect(() => {
    const visitorId = `vistor_${Date.now()}`
    localStorage.setItem("vistor", visitorId)
  }, [])

  return null
}

