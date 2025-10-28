pip# Weather Scout 🌤️

A modern, responsive weather application built for outdoor enthusiasts who need quick access to current weather conditions for any city worldwide.

## Features

✨ **Key Features:**
- 🔍 **City Search**: Search for any city worldwide
- 🌡️ **Current Weather**: Real-time temperature and conditions
- 💨 **Detailed Metrics**: Humidity, wind speed, UV index, visibility
- 🎨 **Beautiful UI**: Modern, responsive design with nature-inspired colors
- ⚡ **Fast & Reliable**: Powered by the free Open-Meteo API
- 📱 **Mobile Friendly**: Works seamlessly on all devices
- 🌙 **Dark Mode Support**: Comfortable viewing in any lighting

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

### Backend
- **API Route**: Next.js API Routes
- **Weather Data**: Open-Meteo API (free, no authentication)
- **Geocoding**: Open-Meteo Geocoding API

### Deployment
- **Hosting**: Vercel (recommended)
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd weather-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

1. **Search for a City**: Enter any city name in the search box
2. **View Weather**: See current conditions, temperature, and detailed metrics
3. **Check Details**: View humidity, wind speed, UV index, and visibility
4. **Search Again**: Try another city anytime

## Project Structure

\`\`\`
weather-scout/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts          # Weather API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── weather-search.tsx        # Search component
│   ├── weather-display.tsx       # Weather display component
│   └── ui/                       # shadcn/ui components
├── public/                       # Static assets
└── README.md                     # This file
\`\`\`

## API Integration

### Open-Meteo API

The application uses two Open-Meteo endpoints:

1. **Geocoding API**: Converts city names to coordinates
   \`\`\`
   https://geocoding-api.open-meteo.com/v1/search
   \`\`\`

2. **Weather API**: Fetches current weather data
   \`\`\`
   https://api.open-meteo.com/v1/forecast
   \`\`\`

**Why Open-Meteo?**
- ✅ Free and open-source
- ✅ No API key required
- ✅ Accurate weather data
- ✅ Global coverage
- ✅ Reliable uptime

## Features Explained

### Weather Metrics

- **Temperature**: Current air temperature in Celsius
- **Feels Like**: Perceived temperature accounting for wind chill
- **Humidity**: Percentage of moisture in the air
- **Wind Speed**: Current wind speed in km/h
- **UV Index**: Sun exposure intensity (0-11+)
- **Visibility**: How far you can see (in km)
- **Weather Condition**: Description of current conditions

### Weather Codes

The app uses WMO (World Meteorological Organization) weather codes:
- 0: Clear sky
- 1-3: Cloudy conditions
- 45-48: Fog
- 51-82: Rain/Drizzle
- 71-86: Snow
- 95-99: Thunderstorms

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - THE DEPLOYMENT LINK (https://weather-now-gilt-one.vercel.app/)

3. **Your app is live!** 🎉

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

## Performance Optimizations

- ⚡ Server-side API calls (no CORS issues)
- 🎯 Optimized images and assets
- 📦 Code splitting and lazy loading
- 🔄 Efficient state management
- 🎨 CSS-in-JS with Tailwind

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Error Handling

The app gracefully handles:
- ❌ City not found
- ❌ Network errors
- ❌ Invalid input
- ❌ API failures

## Future Enhancements

Potential features for future versions:
- 📅 7-day forecast
- 📍 Saved favorite cities
- 🔔 Weather alerts
- 📊 Historical weather data
- 🗺️ Interactive weather map
- 🌍 Multiple language support
- 📱 PWA (Progressive Web App)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include screenshots if applicable

## Acknowledgments

- **Open-Meteo**: Free weather API
- **shadcn/ui**: Beautiful UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework
- **Vercel**: Hosting platform

## Author

Built with ❤️ for outdoor enthusiasts

---

**Happy weather checking! 🌤️**
