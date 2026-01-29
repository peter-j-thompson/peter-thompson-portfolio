# Peter Thompson Portfolio

A modern, dark-mode portfolio website built with Next.js 15, Tailwind CSS, and deployed on Vercel.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & CSS variables
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page assembling all sections
├── components/
│   ├── Navbar.tsx     # Fixed navigation with mobile menu
│   ├── Hero.tsx       # Landing section with terminal aesthetic
│   ├── About.tsx      # Bio and highlights
│   ├── Skills.tsx     # Skills with progress bars
│   ├── Projects.tsx   # Project showcase cards
│   ├── Services.tsx   # Services offered
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx    # Contact form and links
│   └── Footer.tsx     # Footer with social links
└── data/
    └── content.ts     # ALL CONTENT LIVES HERE
```

## ✏️ How to Update Content

**All content is centralized in `src/data/content.ts`**. Edit this file to update:

### Site Config
```typescript
export const siteConfig = {
  name: "Peter Thompson",
  title: "Full Stack Developer",
  tagline: "8+ Years Experience",
  email: "somethingpeter@gmail.com",
  fiverr: "https://www.fiverr.com/peterthompson",
  // ...
};
```

### About Section
```typescript
export const about = {
  headline: "Your main headline here",
  bio: "Your bio text here...",
  highlights: ["Point 1", "Point 2", "Point 3"],
};
```

### Skills
```typescript
export const skills = [
  { name: "Python", category: "backend", level: 95 },
  // Add more skills...
];
```

### Projects
```typescript
export const projects = [
  {
    id: "project-slug",
    name: "Project Name",
    description: "Description here...",
    tech: ["Tech1", "Tech2"],
    status: "Live", // or "In Development", "Beta"
    color: "#ff6b6b", // accent color
  },
  // Add more projects...
];
```

### Services
```typescript
export const services = [
  {
    title: "Service Name",
    description: "Description...",
    icon: "🚀", // emoji icon
  },
  // Add more services...
];
```

### Testimonials
```typescript
export const testimonials = [
  {
    name: "Client Name",
    role: "Their Role",
    text: "What they said...",
    rating: 5,
  },
  // Add more testimonials...
];
```

## 🎨 Customizing Design

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #00ff88;        /* Main accent (green) */
  --accent-dim: #00cc6a;    /* Hover state */
  --card-bg: #111111;
  --card-border: #222222;
  --text-muted: #888888;
}
```

### Fonts
Edit `src/app/layout.tsx` to change fonts:
```typescript
import { Inter, JetBrains_Mono } from "next/font/google";
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deploy
```bash
npm run build
# Deploy the `.next` folder to your hosting
```

## 📝 Adding New Sections

1. Create component in `src/components/NewSection.tsx`
2. Add content to `src/data/content.ts`
3. Import and add to `src/app/page.tsx`

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Inter + JetBrains Mono
- **Hosting:** Vercel

## 📄 License

MIT License - feel free to use as a template for your own portfolio.

---

Built with ☕ and code.
