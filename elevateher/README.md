# ElevateHer CMS

A modern content management system built with React + Vite that enables users to quickly build professional websites using pre-built templates and drag-and-drop functionality.

## Project Expectations & Features

### Core Features

- **Pre-built Templates**: Multiple professionally designed templates for quick website setup across various industries (Business, Portfolio, E-commerce, Health & Wellness, Blog, Restaurant)
- **Content Management**: Easy editing of text, images, and forms with a visual editor
- **Drag-and-Drop Interface**: Intuitive builder with components that can be placed anywhere on the canvas
- **E-commerce Module**: Simple product listing and payment processing capabilities
- **Analytics Dashboard**: Basic visitor tracking and engagement metrics

### Component Library

The CMS includes a rich component library with:

- Hero sections
- Image galleries
- Feature showcases
- Testimonials
- Product listings
- Contact forms
- Blog posts
- Newsletters
- Booking calendars
- Menus for restaurants
- And many more...

## Technical Stack

- **Frontend**: React with Vite for fast development and hot module reloading
- **Styling**: TailwindCSS for responsive design
- **State Management**: React Context API
- **Backend**: Node.js with Express

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Vite Features

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Structure

```
elevateher/
├── src/
│   ├── components/
│   │   ├── Editor/           # Main editor components
│   │   │   ├── components/   # Editor sub-components (Canvas, Sidebars, etc.)
│   │   │   └── ElementRenderer.jsx  # Renders all template elements
│   ├── pages/                # Application pages
│   └── App.jsx               # Main application component
├── elevateher-backend/
│   └── data/
│       └── templates.js      # Pre-built website templates
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
