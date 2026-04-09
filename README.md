# Netflix Portfolio

A visually dynamic, production-ready web app inspired by Netflix, built with the latest React ecosystem tools and best practices.

---

## ✨ Key Features

- Netflix-inspired, responsive UI
- High-performance build and fast dev experience
- Clean routing and modern state/data management
- Typed, maintainable codebase
- Modular components and design system
- Interactive 3D and delightful animations
- Easy testing and code quality assurance

---

## 🧱 Tech Stack

- React 18
- TypeScript 5
- Vite 8 (with SWC)
- Tailwind CSS
- react-router-dom
- @tanstack/react-query
- Redux (if truly used, otherwise omit)
- ESLint
- Vitest & Testing Library
- Playwright
- Deployed via GitHub Pages

---

## 💻 Project Structure

```
netflix-portfolio/
├─ src/
│  ├─ components/         # Reusable UI and layout components
│  ├─ pages/              # Route-based views/pages
│  ├─ hooks/              # Custom hooks (data, form, animation, etc.)
│  ├─ styles/             # Tailwind config, global CSS, design system
│  ├─ assets/             # Images, icons, 3D models, fonts
│  ├─ utils/              # Utility functions and helpers
│  └─ main.tsx            # App entrypoint
├─ public/                # Static files
├─ .github/
│  └─ workflows/          # (Optional) GitHub Actions configs
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ README.md
└─ LICENSE
```
> Folder layout may evolve as the app grows.

---

## ⚙️ Environment Variables

If your project uses API keys or needs config, create a `.env` file from `.env.example`:

```env
VITE_API_BASE_URL=https://api.example.com
# Add more environment variables as needed
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/im-vishu/netflix-portfolio.git
cd netflix-portfolio
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Development Commands

```bash
npm run lint           # Lint the codebase with ESLint
npm run test           # Run unit/component tests (Vitest & Testing Library)
npm run test:e2e       # Run end-to-end tests (Playwright)
npm run build          # Build for production
```

---

## 🤝 Contributing

1. Fork the repository & create a feature branch
2. Make changes with clear commits
3. Open a pull request to `main`
4. Ensure lint/build/tests succeed

---

## 📄 License

[MIT License](LICENSE)  
© 2026 Vishu

---

## 📬 Contact

- GitHub: [im-vishu](https://github.com/im-vishu)
