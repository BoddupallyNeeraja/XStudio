# XStudio Showcase Hub

A modern, attractive web application for showcasing creative projects and portfolios. Built with React and Vite for optimal performance and developer experience.

## Features

- 🎨 **Beautiful Modern UI** - Stunning gradient designs and smooth animations
- ⚡ **Lightning Fast** - Optimized with Vite for blazing-fast performance
- 📱 **Fully Responsive** - Perfect display on all devices
- 🎯 **Interactive Showcase** - Filter projects by category with smooth transitions
- 🌟 **Modern Design** - Glassmorphism effects and gradient backgrounds

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```
or
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
XStudio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Hero.jsx         # Hero section with animated background
│   │   ├── Features.jsx     # Features showcase
│   │   ├── Showcase.jsx     # Project showcase with filtering
│   │   └── Footer.jsx       # Footer with links and contact info
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── App.css              # App-specific styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with gradients and animations
- **HTML5** - Semantic markup

## Customization

You can easily customize:
- Colors and gradients in `src/index.css` (CSS variables)
- Project data in `src/components/Showcase.jsx`
- Features in `src/components/Features.jsx`
- Content and links in all components

## License

MIT License - feel free to use this project for your own purposes.

