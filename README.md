# Kode3 Web Solutions

A modern, professional React-based company website built with Vite, React Router, and modern CSS. Fast, responsive, and production-ready.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.7-purple?logo=vite)
![React Router](https://img.shields.io/badge/React%20Router-7.0.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Overview

Kode3 Web Solutions is a fast, fully responsive website showcasing:
- **Web Design & UI/UX** services
- **Web Application Development** expertise
- **Technical Consulting** capabilities
- Founder profiles with contact information
- Professional contact form

Built with performance and user experience in mind, featuring smooth animations, modern UI patterns, and mobile-first responsive design.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Components](#pages--components)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## ✨ Features

- ✅ **Fast & Optimized** - Vite for instant HMR and optimized builds
- ✅ **Fully Responsive** - Mobile-first design works on all devices
- ✅ **Modern UI** - Clean, minimal design with smooth animations
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels
- ✅ **No Backend Required** - Static frontend, perfect for deployment
- ✅ **Production Ready** - Clean code, modular components, best practices
- ✅ **Easy to Customize** - Well-organized file structure and commented code

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **React Router 7.0.0** - Client-side routing
- **Vite 7.2.7** - Build tool and dev server
- **Vanilla CSS** - Modern CSS with variables and animations

### Developer Tools
- **ESLint** - Code quality
- **Node.js** - Runtime environment

## 📁 Project Structure

```
kode3/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with mobile menu
│   │   ├── Footer.jsx           # Site footer
│   │   ├── ServiceCard.jsx      # Reusable service card component
│   │   ├── FounderCard.jsx      # Founder profile card
│   │   └── ContactForm.jsx      # Frontend contact form
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with hero section
│   │   ├── Services.jsx         # Services showcase
│   │   ├── About.jsx            # Company story & founders
│   │   └── Contact.jsx          # Contact page with form
│   ├── styles/
│   │   ├── globals.css          # Global styles & variables
│   │   ├── Navbar.css           # Navigation styles
│   │   ├── Footer.css           # Footer styles
│   │   ├── ServiceCard.css      # Service card styles
│   │   ├── FounderCard.css      # Founder card styles
│   │   ├── ContactForm.css      # Form styles
│   │   ├── Home.css             # Home page styles
│   │   ├── Services.css         # Services page styles
│   │   ├── About.css            # About page styles
│   │   └── Contact.css          # Contact page styles
│   ├── assets/
│   │   └── founders/            # Founder photos
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # Entry point
├── public/                      # Static files
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── eslint.config.js            # Linting rules
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/orumagideon/kode3.git
   cd kode3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm lint
```

## 📄 Pages & Components

### Pages

#### 🏠 **Home** (`/`)
- Hero section with value proposition
- Services overview
- Why choose Kode3 section (4 key strengths)
- Call-to-action buttons

#### 🛠 **Services** (`/services`)
- Detailed service offerings
- Process workflow (4 steps)
- Technology stack showcase
- Service descriptions

#### 👥 **About** (`/about`)
- Company story
- Key statistics
- **Founder profiles with actual photos and contact information:**
  - Gideon Oruma - CEO & Lead Developer (0718461521)
  - Kevin Bett - CTO & Co-founder (0717460423)
  - Abner Santos - Design & Product Lead (0741607228)
- Core values section

#### 📧 **Contact** (`/contact`)
- Contact information (email, phone, WhatsApp)
- Frontend contact form
- FAQ section

### Reusable Components

- **Navbar** - Responsive navigation with hamburger menu
- **Footer** - Site footer with links and contact info
- **ServiceCard** - Reusable card component for services
- **FounderCard** - Profile card for founders with photos
- **ContactForm** - Frontend form with validation

## 🎨 Design System

### Color Palette
- **Primary**: `#0066ff` (Blue)
- **Secondary**: `#ff6b35` (Orange)
- **Accent**: `#00d4ff` (Cyan)
- **Dark Background**: `#0a0e27`
- **Light Background**: `#f8fafc`

### Typography
- **Font Family**: System fonts (Apple, Segoe UI, Roboto)
- **Responsive Sizing**: Uses `clamp()` for fluid typography
- **Font Weight**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (heavy)

### Spacing
- Consistent padding and margins using CSS custom properties
- Mobile-first responsive breakpoints at 768px, 1024px

## 🔧 Customization

### Update Company Information
Edit these files to customize content:
- `src/components/Footer.jsx` - Company contact details
- `src/pages/About.jsx` - Founder information
- `src/pages/Contact.jsx` - Contact methods and FAQ

### Change Colors
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary-color: #0066ff;
  --secondary-color: #ff6b35;
  --accent-color: #00d4ff;
}
```

### Add New Pages
1. Create a new file in `src/pages/`
2. Create corresponding CSS in `src/styles/`
3. Add route in `src/App.jsx`
4. Update `src/components/Navbar.jsx`

### Customize Founders
Edit the `founders` array in `src/pages/About.jsx`:
```jsx
const founders = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio',
    contact: 'Phone number',
    image: importedImage
  }
];
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder. Ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Responsive touch targets

## 📧 Contact

**Kode3 Web Solutions**
- Email: hello@kode3.com
- Phone: +1 (234) 567-890
- WhatsApp: [Chat with us](https://wa.me/1234567890)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Client testimonials carousel
- [ ] Portfolio/Projects showcase
- [ ] Email integration for contact form
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration

---

**Built with ❤️ by Kode3 Web Solutions**

Made with React, Vite, and modern web technologies.
