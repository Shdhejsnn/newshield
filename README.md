# eBay Clone - Backup Shield

A modern e-commerce application built with React and Node.js, featuring a comprehensive shopping experience with secure payment processing.

## Recent Improvements

### Image Rendering Fixes
- **Fixed image loading issues**: Replaced unreliable placeholder images with high-quality Unsplash images
- **Added fallback image system**: Automatic fallback images when primary images fail to load
- **Improved image loading performance**: Added lazy loading and loading states
- **Enhanced error handling**: Graceful degradation when images fail to load

### Product Catalog Expansion
- **Increased product variety**: Added 25 diverse products across multiple categories
- **New product categories**:
  - Gaming (PlayStation 5, Xbox Series X, Nintendo Switch)
  - Fashion (Ray-Ban sunglasses, Levi's jeans, Under Armour)
  - Home & Garden (Dyson vacuum, Instant Pot, KitchenAid mixer)
  - Audio (JBL speakers, Bose headphones)
  - Watches (Casio G-Shock, Apple Watch)

### Technical Improvements
- **Better CSS utilities**: Added line-clamp for text truncation
- **Loading animations**: Smooth image loading transitions
- **Responsive design**: Optimized for all screen sizes
- **Error state management**: Proper handling of image loading failures

## Features

- **User Authentication**: Secure login system
- **Product Browsing**: Browse through 25+ products with high-quality images
- **Shopping Cart**: Add/remove items with real-time updates
- **Payment Processing**: Secure payment flow
- **Responsive Design**: Works on desktop, tablet, and mobile

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Images**: Unsplash API for high-quality product images
- **Styling**: Tailwind CSS with custom eBay theme colors

## Product Categories

- **Electronics**: Smartphones, laptops, TVs, cameras
- **Gaming**: Consoles and accessories
- **Fashion**: Clothing, shoes, accessories
- **Home & Garden**: Appliances and tools
- **Audio**: Headphones and speakers
- **Watches**: Smartwatches and traditional watches

## Image Quality

All product images are sourced from Unsplash, ensuring:
- High resolution (400x400px optimized)
- Consistent quality across all products
- Fast loading with proper compression
- Automatic fallback system for reliability 