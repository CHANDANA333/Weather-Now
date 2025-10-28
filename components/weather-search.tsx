"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface WeatherSearchProps {
  onSearch: (city: string) => void
  loading: boolean
}

export default function WeatherSearch({ onSearch, loading }: WeatherSearchProps) {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter city name (e.g., Denver, Tokyo, London)..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
          className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 transition-all"
        />
        <Button
          type="submit"
          disabled={loading || !city.trim()}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          🔍{loading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  )
}
