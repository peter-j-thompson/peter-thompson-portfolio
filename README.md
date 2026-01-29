# Peter Thompson Portfolio

🔗 **Live Site:** https://peter-j-thompson.github.io/peter-thompson-portfolio/

A modern, dark-mode portfolio website built with Next.js 15, Tailwind CSS, and deployed on GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
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

### Current: GitHub Pages
The site auto-deploys via gh-pages. To manually deploy:

```bash
npm run build
npx gh-pages -d out -b gh-pages --dotfiles
```

### Custom Domain
To use a custom domain (e.g., peterthompson.dev):

1. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true },
     // Remove basePath and assetPrefix for root deployment
   };
   ```

2. Add CNAME to `public/CNAME`:
   ```
   peterthompson.dev
   ```

3. Configure DNS with your registrar

### Vercel Deployment
For Vercel (better performance, custom domains):

1. Remove `output: "export"` from next.config.ts
2. Remove `basePath` and `assetPrefix`
3. Connect repo to Vercel at vercel.com/new

## 📝 Adding New Sections

1. Create component in `src/components/NewSection.tsx`
2. Add content to `src/data/content.ts`
3. Import and add to `src/app/page.tsx`

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Inter + JetBrains Mono
- **Hosting:** GitHub Pages (can migrate to Vercel)

## 📂 Repository

- **GitHub:** https://github.com/peter-j-thompson/peter-thompson-portfolio
- **Local:** ~/projects/portfolio-site/

## 📄 License

MIT License - feel free to use as a template for your own portfolio.

---

Built with ☕ and code.
