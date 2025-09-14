# CapCut UI Clone

A pixel-perfect React Native TypeScript implementation of the CapCut poster generation interface.

## Features

- **Status Bar**: Displays time (09.41) and system icons (cellular, wifi, battery)
- **Navigation**: Close button and tab switching between "Smart script" and "Advanced script"
- **Poster Selection**: Horizontal scrollable cards with different poster types:
  - Display Prod (selected by default)
  - Promotion
  - Branding
  - Announcement
  - Personal
- **Text Input**: Large text area with placeholder content and image upload icon
- **Settings**: Size and Category configuration options
- **Generate Button**: Prominent white button with gradient icon
- **Footer**: CapCut and Mobbin branding

## Technical Implementation

- Built with React Native and TypeScript
- Uses Expo for development and deployment
- **Google Fonts Integration**: Inter and Poppins font families
- **Professional Responsive Library**: react-native-responsive-screen for precise scaling
- Modular component architecture for maintainability
- Advanced responsive design system with percentage-based scaling
- Implements LinearGradient for visual effects
- TypeScript interfaces for type safety
- Custom responsive utilities and typography scales
- Interactive elements with proper touch feedback
- Pixel-perfect styling matching the original design
- Support for all mobile screen sizes (320px - 480px+ width)
- Professional font loading and management system

## Getting Started

### Prerequisites

- Node.js (v20.18.2 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CapcutUI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
npm run ios     # For iOS Simulator
npm run android # For Android Emulator
npm run web     # For web browser
```

## Project Structure

```
├── App.tsx              # Main application component
├── components/
│   ├── Header.tsx       # Header with tabs and close button
│   ├── PosterSelection.tsx # Horizontal scrollable poster selection
│   ├── PromptInput.tsx  # Text input with image upload
│   ├── SettingsSection.tsx # Size and category settings
│   ├── GenerateButton.tsx # Primary action button
│   └── Footer.tsx       # Branding and attribution
├── types/
│   └── index.ts         # TypeScript type definitions
├── data/
│   └── posterTypes.ts   # Poster type data
├── hooks/
│   └── useResponsive.ts # Responsive design utilities
├── utils/
│   ├── responsive.ts    # Responsive scaling utilities
│   └── fontLoader.ts    # Google Fonts loading
├── constants/
│   └── fonts.ts         # Font family definitions
├── assets/              # App icons and images
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Key Components

- **Header**: Navigation with close button and script tabs (Smart/Advanced)
- **PosterSelection**: Horizontal scrollable poster type selection with responsive cards
- **PromptInput**: Text input area with image upload functionality
- **SettingsSection**: Size and category configuration options
- **GenerateButton**: Primary action button with gradient styling and disabled state
- **Footer**: CapCut and Mobbin branding with responsive icons

## Design Features

- Dark theme with black background (#000)
- White text on dark backgrounds for contrast
- Gradient accents (blue to purple) for active states
- Rounded corners and modern UI elements
- Proper spacing and typography hierarchy
- Interactive feedback for touch elements

## Dependencies

- `expo`: Expo framework
- `react-native`: React Native core
- `expo-linear-gradient`: Gradient effects
- `@expo/vector-icons`: Icon library
- `react-native-safe-area-context`: Safe area handling
- `react-native-responsive-screen`: Professional responsive scaling
- `@expo-google-fonts/inter`: Inter font family
- `@expo-google-fonts/poppins`: Poppins font family
- `expo-font`: Font loading utilities
- `typescript`: TypeScript support

## Live Demo

To see the app in action:

1. Run `npm start`
2. Scan the QR code with Expo Go app on your mobile device
3. Or use the iOS/Android simulators

The app will display the complete CapCut interface with all interactive elements functional.

## Notes

- The app uses placeholder images from Unsplash for demonstration
- All interactive elements are functional (tab switching, poster selection, etc.)
- The design matches the original pixel-perfect specifications
- Optimized for mobile devices with proper touch targets and spacing
