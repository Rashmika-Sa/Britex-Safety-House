# 🔥 Britex - Advanced Fire Safety Solutions

A modern, futuristic corporate website for Britex Group of Companies, built with **React**, **Tailwind CSS**, and **Framer Motion**. Features cutting-edge design with glassmorphism effects, smooth animations, and responsive layouts.

## 🎨 Design Features

- **Modern & Futuristic Design**: Clean, minimal, slightly industrial aesthetic
- **Glassmorphism Effects**: Blur and transparency effects for a premium feel
- **3D Hover Animations**: Interactive cards and buttons with depth
- **Smooth Animations**: Scroll-triggered reveals and transition effects
- **Color Scheme**: White, Red (#E63946), Black with premium gradients
- **Fully Responsive**: Mobile-first design that works perfectly on all devices

## 📱 Pages

- **Home**: Hero section, stats, product overview
- **Products**: Fire extinguishers (4 types) + other products with category tabs
- **Services**: Training, installation, maintenance, and PPE supply
- **About**: Company story, mission, values, timeline, and expertise
- **Contact**: Contact forms, location details, and WhatsApp integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd britex-safety-house

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   ├── ProductCard.jsx
│   ├── ServiceCard.jsx
│   ├── StatCounter.jsx
│   └── SectionHeader.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles

```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.2
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **Routing**: React Router DOM 6.14.0
- **Build Tool**: Vite 4.4.5
- **CSS Processing**: PostCSS & Autoprefixer

## 🎯 Key Features

### Navigation
- Sticky navbar that becomes solid on scroll
- Smooth transition effects
- Mobile-responsive hamburger menu
- Active link indicators

### Hero Section
- Fullscreen hero with animated background
- Compelling CTA buttons
- Scroll-to-explore indicator
- Gradient animations

### Components
- **ProductCard**: Interactive product showcase with hover effects
- **ServiceCard**: Service highlights with icons and descriptions
- **StatCounter**: Animated number counters
- **SectionHeader**: Consistent section titles with animations

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered reveals
- Hover scale and rotation effects
- Floating and pulse animations
- Gradient glows on interaction

### Contact Features
- Contact form (UI only, no backend required)
- Multiple location details
- WhatsApp integration (floating button + direct links)
- Phone and email contact methods

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'brand-red': '#E63946',
  'brand-black': '#1A1A1A',
  'brand-white': '#FFFFFF',
}
```

### Animations
Modify animation timings in `tailwind.config.js` under the `animation` section.

### Content
Update company information in respective page files:
- Contact details in `src/pages/Contact.jsx`
- About section in `src/pages/About.jsx`
- Products list in `src/pages/Home.jsx` and `src/pages/Products.jsx`

## 📱 Contact Information

**Galle Office**
- Address: No.31 Awewalwala Road, Bataganwila, Galle
- Phone: 0912241405

**Colombo Office**
- Address: 16, Deniya Road, Bollatha, Kandana
- Phone: 0702518581

**WhatsApp**: 0712768768

## 📄 License

This project is proprietary to Britex Group of Companies.

## 🤝 Support

For inquiries and support, contact:
- Email: info@britex.lk
- Phone: 0912241405 (Galle) / 0702518581 (Colombo)
- WhatsApp: 0712768768

---

**Built with ❤️ for Fire Safety Excellence**
