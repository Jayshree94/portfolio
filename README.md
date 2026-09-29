# Jayshree Kharate - Portfolio

A modern, professional portfolio website for a Senior QA Automation Engineer / SDET with 8+ years of experience.

## 🚀 Live Demo

_Live URL to be added once deployed._

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations**: Framer Motion for fluid scroll and hover animations
- **Responsive**: Mobile-first design that works on all devices
- **Resume Preview**: Built-in PDF viewer with download functionality
- **Social Links**: Direct links to LinkedIn and GitHub profiles
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd jayshreeportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Base Path Configuration**
   - `vite.config.ts` is configured with `base: '/'`, which is correct for a `username.github.io` repository
   - If deploying to a project repository instead (e.g. `username.github.io/repo-name`), update `base` to `'/repo-name/'`

4. **Push Your Changes**
   ```bash
   git push
   ```

5. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the **Actions** tab in your repository to monitor the deployment

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains your production-ready files
# Deploy the dist folder to your hosting provider
```

## 📝 Customization

### Update Personal Information

1. **Contact Details** - Edit `src/components/Contact.tsx`
2. **Experience** - Edit `src/components/Experience.tsx`
3. **Skills** - Edit `src/components/Skills.tsx`
4. **Projects** - Edit `src/components/Projects.tsx`
5. **About Section** - Edit `src/components/About.tsx`

### Update Social Links

Social links are already configured in `src/components/Hero.tsx`:
- LinkedIn: https://www.linkedin.com/in/jayshree-kharate-qa/
- GitHub: https://github.com/Jayshree94

### Add Your Resume

Replace the placeholder PDF:
1. Add your resume PDF to the `public` folder
2. Name it `Jayshree_Kharate_Senior_SDET.pdf`
3. Or update the filename in `src/components/Hero.tsx`

## 📂 Project Structure

```
jayshreeportfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── Jayshree_Kharate_Senior_SDET.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Color Scheme

The portfolio uses a dark theme with the following color palette:
- **Background**: Slate 950
- **Primary**: Blue (Tailwind primary-500)
- **Accent**: Purple
- **Text**: Slate 100-400

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Jayshree Kharate**
- Email: jayshreekharate16@gmail.com
- LinkedIn: [linkedin.com/in/jayshree-kharate-qa](https://www.linkedin.com/in/jayshree-kharate-qa/)
- GitHub: [github.com/Jayshree94](https://github.com/Jayshree94)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
