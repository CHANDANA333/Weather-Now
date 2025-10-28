# Development Guide

## Local Development Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Installation

1. **Clone repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd weather-scout
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
\`\`\`

## Project Structure

\`\`\`
src/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts          # API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── weather-search.tsx        # Search input
│   ├── weather-display.tsx       # Results display
│   └── ui/                       # UI components
└── lib/
    └── utils.ts                  # Utility functions
\`\`\`

## Component Architecture

### Page Component (app/page.tsx)
- Main container
- State management
- API communication
- Error handling

### WeatherSearch Component
- Input field
- Search button
- Form submission
- Loading state

### WeatherDisplay Component
- Weather cards
- Metrics display
- Weather icons
- Responsive grid

## API Route (app/api/weather/route.ts)

### Request
\`\`\`json
{
  "city": "London"
}
\`\`\`

### Response
\`\`\`json
{
  "city": "London, United Kingdom",
  "temperature": 15.2,
  "condition": "Partly cloudy",
  "humidity": 65,
  "windSpeed": 12.5,
  "feelsLike": 14.1,
  "uvIndex": 3,
  "visibility": 10000
}
\`\`\`

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Configured in `globals.css`
- Custom theme colors defined

### Color Palette
- Primary: Teal (#0d9488)
- Secondary: Green (#059669)
- Accent: Orange (#f59e0b)
- Neutrals: Gray scale

## State Management

Using React Hooks:
- `useState`: Weather data, loading, error states
- `useCallback`: Memoized functions
- `useEffect`: Side effects (if needed)

## Error Handling

\`\`\`typescript
try {
  // API call
} catch (error) {
  // Handle error
  setError(error.message)
}
\`\`\`

## Testing

### Manual Testing Checklist
- [ ] Search for valid city
- [ ] Search for invalid city
- [ ] Check error messages
- [ ] Test on mobile
- [ ] Test dark mode
- [ ] Test loading states

### Test Cities
- London, UK
- Tokyo, Japan
- New York, USA
- Sydney, Australia
- Dubai, UAE

## Performance Optimization

1. **Code Splitting**
   - Components are automatically split
   - Dynamic imports for heavy components

2. **Image Optimization**
   - Use Next.js Image component
   - Lazy loading enabled

3. **Caching**
   - API responses cached
   - Static assets cached

## Debugging

### Browser DevTools
1. Open DevTools (F12)
2. Check Network tab for API calls
3. Check Console for errors
4. Use React DevTools extension

### Server Logs
\`\`\`bash
# View logs in development
npm run dev
# Check terminal output
\`\`\`

## Adding Features

### Add a New Component
1. Create file in `components/`
2. Export as default
3. Import in page or parent component

### Add a New API Route
1. Create file in `app/api/`
2. Export POST/GET function
3. Return NextResponse

### Add Styling
1. Use Tailwind classes
2. Or add CSS in globals.css
3. Use CSS variables for colors

## Common Issues

### Port 3000 already in use
\`\`\`bash
# Use different port
npm run dev -- -p 3001
\`\`\`

### Module not found
\`\`\`bash
# Reinstall dependencies
rm -rf node_modules
npm install
\`\`\`

### Build fails
\`\`\`bash
# Clear cache
rm -rf .next
npm run build
\`\`\`

## Best Practices

1. **Component Organization**
   - Keep components small
   - One responsibility per component
   - Reusable components in `ui/`

2. **Code Quality**
   - Use TypeScript
   - Add prop types
   - Handle errors gracefully

3. **Performance**
   - Minimize re-renders
   - Use memoization
   - Optimize images

4. **Accessibility**
   - Use semantic HTML
   - Add ARIA labels
   - Test with screen readers

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Open-Meteo API](https://open-meteo.com)

---

Happy coding! 🚀
