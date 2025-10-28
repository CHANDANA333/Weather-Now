import { type NextRequest, NextResponse } from "next/server"

interface GeocodingResult {
  results?: Array<{
    latitude: number
    longitude: number
    name: string
    country: string
  }>
}

interface WeatherResult {
  current?: {
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    weather_code: number
    wind_speed_10m: number
    uv_index: number
    visibility: number
  }
}

export async function POST(request: NextRequest) {
  try {
    const { city } = await request.json()

    if (!city || typeof city !== "string") {
      return NextResponse.json({ error: "City name is required" }, { status: 400 })
    }

    // Step 1: Geocode the city name to get coordinates
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
    )

    if (!geoResponse.ok) {
      throw new Error("Geocoding failed")
    }

    const geoData: GeocodingResult = await geoResponse.json()

    if (!geoData.results || geoData.results.length === 0) {
      return NextResponse.json({ error: "City not found" }, { status: 404 })
    }

    const location = geoData.results[0]
    const { latitude, longitude, name, country } = location

    // Step 2: Fetch weather data using coordinates
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index,visibility&timezone=auto`,
    )

    if (!weatherResponse.ok) {
      throw new Error("Weather fetch failed")
    }

    const weatherData: WeatherResult = await weatherResponse.json()

    if (!weatherData.current) {
      throw new Error("No weather data available")
    }

    const current = weatherData.current

    // Convert WMO weather code to description
    const weatherDescription = getWeatherDescription(current.weather_code)

    return NextResponse.json({
      city: `${name}, ${country}`,
      temperature: current.temperature_2m,
      condition: weatherDescription,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
      feelsLike: current.apparent_temperature,
      uvIndex: current.uv_index,
      visibility: current.visibility,
    })
  } catch (error) {
    console.error("Weather API error:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}

function getWeatherDescription(code: number): string {
  // WMO Weather interpretation codes
  const weatherCodes: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  }

  return weatherCodes[code] || "Unknown"
}
