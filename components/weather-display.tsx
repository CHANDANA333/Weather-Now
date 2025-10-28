"use client"

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

interface WeatherDisplayProps {
  weather: WeatherData
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const getWeatherIcon = (condition: string) => {
    const lower = condition.toLowerCase()
    if (lower.includes("rain")) return "🌧️"
    if (lower.includes("cloud")) return "☁️"
    if (lower.includes("clear") || lower.includes("sunny")) return "☀️"
    if (lower.includes("snow")) return "❄️"
    if (lower.includes("storm")) return "⛈️"
    if (lower.includes("fog")) return "🌫️"
    return "🌤️"
  }

  return (
    <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Weather Card */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8 sm:p-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{weather.city}</h2>
            <p className="text-muted-foreground text-lg">{weather.condition}</p>
          </div>
          <div className="text-6xl sm:text-7xl">{getWeatherIcon(weather.condition)}</div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <p className="text-muted-foreground text-sm mb-1">Temperature</p>
            <p className="text-3xl font-bold text-primary">{Math.round(weather.temperature)}°C</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <p className="text-muted-foreground text-sm mb-1">Feels Like</p>
            <p className="text-3xl font-bold text-secondary">{Math.round(weather.feelsLike)}°C</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 col-span-2 sm:col-span-1">
            <p className="text-muted-foreground text-sm mb-1">Condition</p>
            <p className="text-lg font-semibold text-foreground capitalize">{weather.condition}</p>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <DetailCard label="Humidity" value={`${weather.humidity}%`} icon="💧" color="text-blue-500" />
        <DetailCard
          label="Wind Speed"
          value={`${Math.round(weather.windSpeed)} km/h`}
          icon="💨"
          color="text-cyan-500"
        />
        <DetailCard
          label="Visibility"
          value={`${Math.round(weather.visibility / 1000)} km`}
          icon="👁️"
          color="text-teal-500"
        />
        <DetailCard label="UV Index" value={Math.round(weather.uvIndex)} icon="☀️" color="text-accent" />
        <DetailCard label="Pressure" value="1013 mb" icon="🔽" color="text-primary" />
        <DetailCard label="Cloud Cover" value="45%" icon="☁️" color="text-gray-500" />
      </div>

      {/* Footer Info */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Weather data provided by Open-Meteo API</p>
      </div>
    </div>
  )
}

interface DetailCardProps {
  icon: string
  label: string
  value: string | number
  color: string
}

function DetailCard({ icon, label, value, color }: DetailCardProps) {
  return (
    <div className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors">
      <div className={`flex items-center gap-2 mb-2 ${color}`}>
        <span className="text-xl">{icon}</span>
        <p className="text-muted-foreground text-sm font-medium">{label}</p>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  )
}
