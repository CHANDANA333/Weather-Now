"use client"

import { useState } from "react"
import WeatherSearch from "@/components/weather-search"
import WeatherDisplay from "@/components/weather-display"

interface WeatherData {
  city: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  feelsLike: number
  uvIndex: number
  visibility: number
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
      })

      if (!response.ok) {
        throw new Error("City not found")
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather")
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Header */}
      <div className="border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">☁️</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">weather now</h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Check weather conditions for your outdoor adventures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <WeatherSearch onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
            {error}
          </div>
        )}

        {weather && <WeatherDisplay weather={weather} />}

        {!weather && !error && !loading && (
          <div className="mt-12 text-center">
            <div className="inline-block p-8 bg-card rounded-lg border border-border/50">
              <span className="text-6xl block mb-4 opacity-50">☁️</span>
              <p className="text-muted-foreground text-lg">Search for a city to see current weather conditions</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
