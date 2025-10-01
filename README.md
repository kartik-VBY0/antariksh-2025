# Antariksh - NIT Kurukshetra Astronomy Club Website

Welcome to the official website repository for Antariksh, the Astronomy Club of NIT Kurukshetra.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/antariksh-nit-kurukshetra/antariksh-2025.git
   cd antariksh-2025
   ```

2. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## 🎨 Tailwind CSS Setup

This project uses **Tailwind CSS v3** for styling. Here's how to add Tailwind to a new React project:

### Method 1: Add to existing React project (what we did)

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Generate config files  
npx tailwindcss init -p

# Add Tailwind directives to your CSS
# Add these lines to src/index.css:
@tailwind base;
@tailwind components; 
@tailwind utilities;
```

### Method 2: Create new project with Tailwind

```bash
# Create React app
npx create-react-app my-project
cd my-project

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure tailwind.config.js
# Update content: ["./src/**/*.{js,jsx,ts,tsx}"]

# Add Tailwind directives to src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📁 Project Structure

```
antariksh-2025/
├── frontend/                 # React frontend with Tailwind CSS
│   ├── public/              # Public assets
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable React components  
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images, icons, etc.
│   │   ├── App.js          # Main App component  
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Global styles with Tailwind
│   ├── package.json        # Dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
├── backend/                 # Backend API (to be implemented)
└── README.md               # This file
```

## 👥 Team Assignments & Page Development

### Pages to be developed:

1. **Home Page** (`src/pages/Home.js`)
   - Hero section with space background
   - Club introduction
   - Featured events/news
   - Call-to-action sections

2. **About Page** (`src/pages/About.js`) 
   - Club mission and vision
   - History and achievements
   - What we do
   - Values and goals

3. **Events Page** (`src/pages/Events.js`)
   - Upcoming events grid
   - Past events timeline
   - Event registration forms
   - Event calendar

4. **Gallery Page** (`src/pages/Gallery.js`)
   - Photo gallery with filters
   - Astrophotography showcase  
   - Event photos
   - Video content

5. **Team Page** (`src/pages/Team.js`)
   - Current team members
   - Alumni section
   - Leadership structure
   - Member profiles with photos

6. **Contact Page** (`src/pages/Contact.js`)
   - Contact information
   - Contact form
   - Location/map integration
   - Social media links

## 🎨 Tailwind CSS Usage Examples

### Basic Styling
```jsx
// Button
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>

// Card
<div className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-4">Card Title</h2>
  <p className="text-gray-600">Card content...</p>
</div>

// Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### Custom Colors (Astronomy Theme)
```jsx
// Using custom space colors
<div className="bg-space-900 text-space-50">
  <h1 className="text-primary-400">Antariksh</h1>
</div>

// Gradient backgrounds
<div className="bg-gradient-to-r from-blue-600 to-purple-600">
  Space gradient background
</div>
```

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test` 
Launches the test runner

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!**

## 📦 Installing Additional Packages

```bash
# Navigate to frontend directory
cd frontend

# Install packages (examples)
npm install react-router-dom          # Routing
npm install @heroicons/react          # Icons  
npm install framer-motion             # Animations
npm install react-hook-form           # Forms
npm install axios                     # API calls
```

## 🔧 Development Workflow

1. **Clone and setup** (see Quick Start above)
2. **Create feature branch:**
   ```bash
   git checkout -b feature/page-name
   ```
3. **Develop your assigned page**
4. **Use Tailwind classes for styling**
5. **Test locally with `npm start`**
6. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add: [page-name] page with Tailwind styling"
   git push origin feature/page-name
   ```
7. **Create Pull Request**

## 📱 Responsive Design with Tailwind

Use Tailwind's responsive prefixes:
```jsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🌟 Tailwind Features to Use

- **Responsive Design**: `sm:`, `md:`, `lg:`, `xl:` prefixes
- **Dark Mode**: `dark:` prefix (if implemented)
- **Hover Effects**: `hover:` prefix
- **Animations**: `transition-all`, `duration-300`, `ease-in-out`
- **Custom Colors**: Use the space and primary color palettes
- **Typography**: `font-display` for headings, `font-sans` for body

## 🤝 Contributing Guidelines

1. Use Tailwind CSS for all styling
2. Follow mobile-first responsive design
3. Use semantic HTML elements
4. Maintain consistent spacing using Tailwind's spacing scale
5. Test on different screen sizes
6. Keep components small and reusable

---

**Happy Coding! 🚀✨**

Need help with Tailwind? Check the [official documentation](https://tailwindcss.com/docs)