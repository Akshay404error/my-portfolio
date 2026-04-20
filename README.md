# Akshay D's Portfolio

A modern, responsive personal portfolio website built with React. Showcase your skills, projects, experience, and achievements in a clean and professional format.

## Features
- Responsive design for all devices
- Projects, experience, education, and contact sections
- Downloadable resume
- Easy to customize content via a single config file
- Social media integration

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
  ```bash
   git clone https://github.com/Akshay404error/my-portfolio.git
   cd my-portfolio
  ```
2. **Install dependencies:**
   ```bash
  npm install
   # or
   yarn install
   ```
3. **Run locally:**
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Customization
- **Edit your content:**
  - All personal data (projects, experience, contact info, etc.) is in `src/portfolio.js`.
  - Update your resume: Replace `public/my_resume.pdf` with your own resume file.
- **Profile image:**
  - (Optional) Add a profile image to the contact page by editing the code and placing your image in the `public` folder.

## Deployment
You can deploy this portfolio for free using:

### Vercel
- Connect your GitHub repo at [vercel.com](https://vercel.com/)
- Click "Deploy"

### Netlify
- Connect your GitHub repo at [netlify.com](https://www.netlify.com/)
- Or drag-and-drop the `build` folder after running `npm run build`

### GitHub Pages
- Run `npm run build`
- Deploy the `build` folder to the `gh-pages` branch (see [Create React App docs](https://create-react-app.dev/docs/deployment/#github-pages))

### Firebase Hosting
- Run `npm run build`
- Use `firebase deploy` (see [Firebase Hosting](https://firebase.google.com/products/hosting))

## Credits
- Built with [React](https://reactjs.org/)
- Inspired by open-source portfolio templates

## License
This project is open source and available under the [MIT License](LICENSE).
