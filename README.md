# Dark Mode Brutalist Portfolio

A modern, high-performance portfolio website built with Next.js 14, featuring a dark brutalist aesthetic with grain texture overlay.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion for smooth animations
- 🎯 Fully responsive design
- 🌙 Dark mode brutalist aesthetic
- 🔍 SEO optimized

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout with fonts and noise overlay
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services slider
│   ├── SelectedWorks.jsx # Interactive works showcase
│   ├── Testimonials.jsx  # Testimonials
│   ├── CTA.jsx         # Call to action
│   └── Footer.jsx      # Footer
└── public/             # Static assets

```

## Customization

- Update content in each component file
- Modify colors in `tailwind.config.js`
- Adjust animations in component files using Framer Motion
- Replace placeholder emojis with actual images

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React Icons
