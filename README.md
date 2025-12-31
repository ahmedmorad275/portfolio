## Portfolio

A personal portfolio website built with React and Vite. This project showcases projects, skills, and contact information using a component-based structure and a theme context for light/dark mode.

Live demo: http://portfolio-ten-silk-n4i3t277ma.vercel.app/


## Features

- Responsive portfolio layout
- Theme (light/dark) switching via `src/Context/ThemeContext.jsx`
- Sections for About, Projects, Skills, Contact, and more
- Component-driven structure for easy customization

## Tech Stack

- React
- Vite
- JavaScript (ESModules)
- CSS (see `index.css`)

## Getting Started

Prerequisites

- Node.js (v14+ recommended)
- npm (or yarn)

Install and run locally

```bash
# from project root
npm install
npm run dev
```

Build for production

```bash
npm run build
npm run preview
```

These commands assume the default Vite scripts in `package.json`:

- `dev` or `start` — runs the dev server
- `build` — bundles the app for production
- `preview` — locally preview the production build

If your `package.json` uses different script names, update the commands accordingly.

## Project Structure

```
/ (project root)
	├─ index.html
	├─ package.json
	├─ src/
	│   ├─ main.jsx
	│   ├─ App.jsx
	│   ├─ index.css
	│   ├─ assets/
	│   │   └─ posters/
	│   ├─ Components/
	│   │   ├─ About.jsx
	│   │   ├─ Card.jsx
	│   │   ├─ Contact.jsx
	│   │   ├─ Footer.jsx
	│   │   ├─ Hero.jsx
	│   │   ├─ Navbar.jsx
	│   │   ├─ Projects.jsx
	│   │   ├─ Section.jsx
	│   │   └─ Skills.jsx
	│   └─ Context/
	│       └─ ThemeContext.jsx
	└─ README.md
```

Key files

- `src/Context/ThemeContext.jsx` — theme provider and hook for toggling theme
- `src/Components/Navbar.jsx` — likely contains navigation and theme toggle
- `src/Components/Projects.jsx` — component to list portfolio projects

## Customization

- Update content in the `src/Components` files to change text, links, and project items.
- Replace images in `src/assets/posters/` and adjust references in components.
- Edit theme defaults in `src/Context/ThemeContext.jsx` to change initial mode or colors.

## Deployment

This project can be deployed to platforms like Vercel, Netlify, or GitHub Pages. Typical steps for Vercel/Netlify:

- Build your app: `npm run build`
- Deploy the output from the `dist/` folder (Vite default)

If using Git-based deploys (Vercel/Netlify), simply connect the repo and set the build command to `npm run build` and the publish directory to `dist`.

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is released under the AMG License.

## Contact

- GitHub: https://github.com/ahmedmorad275/portfolio
- Author: Ahmed Morad (ahmedmorad569@gmail.com)
