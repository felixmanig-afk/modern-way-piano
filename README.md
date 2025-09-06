# Modern Way Piano

A professional piano teaching website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎹 **Modern Design**: Dark theme with orange accent colors
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized for speed with Next.js 14 and Turbopack
- 🎨 **Animations**: Smooth transitions with Framer Motion
- ♿ **Accessible**: WCAG compliant with keyboard navigation
- 🔍 **SEO Ready**: Structured data, sitemap, and meta tags
- 📊 **Analytics Ready**: Prepared for Google Analytics integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: next-seo + next-sitemap
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd modern-way-piano
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Content Management

All site content is managed through `/content/content.json`. This includes:

- Site information and branding
- Hero section content
- Course offerings
- About section (Chloe's bio)
- Testimonials
- Contact information
- SEO metadata

To update content, simply edit the JSON file and the changes will be reflected across the site.

## Adding Assets

Place your assets in the `/public` directory:

- **Logo**: `/public/logo.png`
- **Hero Video**: `/public/hero-video.mp4` and `/public/hero-video.mov`
- **Hero Poster**: `/public/hero-poster.jpg`
- **Chloe's Photo**: `/public/chloe-photo.jpg`

## SEO Features

- Automatic sitemap generation
- Structured data (Organization, LocalBusiness, Course, Person)
- Meta tags for all pages
- Open Graph and Twitter Card support
- Robots.txt configuration

## Performance Optimizations

- Image optimization with Next.js Image component
- Video optimization with multiple formats
- Lazy loading for below-the-fold content
- Font optimization
- Bundle optimization

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Reduced motion support
- High contrast support

## Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push to main branch

## Customization

### Colors
Update the color scheme in `/src/app/globals.css` by modifying the CSS custom properties.

### Fonts
The site uses Montserrat for headings and system fonts for body text. Update font imports in `globals.css`.

### Animations
Modify Framer Motion animations in individual components or create reusable animation variants.

## License

This project is private and proprietary to Modern Way Piano.

## Support

For technical support or questions about the website, please contact the development team.