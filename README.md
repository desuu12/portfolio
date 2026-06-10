# Desalegn | Personal Portfolio

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**, featuring smooth animations, dark mode, and a fully working contact form.

🌐 **Live Site:** [desalegn-dev.netlify.app](https://desalegn-dev.netlify.app)

---

## Features

- ⚡ Built with React 18 + Vite for fast performance
- 🎨 Tailwind CSS for clean, responsive design
- 🌙 Dark / Light mode toggle
- ✉️ Working contact form powered by EmailJS
- 🎞️ Smooth scroll animations and transitions
- 📱 Fully responsive on all screen sizes
- 🔒 Environment variables for secure credential management
- 🚀 Deployed on Netlify with auto-deploy from GitHub

---

## Sections

| Section | Description |
|---|---|
| Hero | Introduction with typewriter animation |
| About | Background, education, and stats |
| Skills | Tech stack with animated marquee |
| Projects | Showcased projects with GitHub links |
| Education | Academic background |
| Services | What I offer |
| Contact | Working contact form + quick connect |

---

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML5, Tailwind CSS, Bootstrap |
| Backend | PHP, Python |
| Database | MySQL |
| Tools | Git, Vite, EmailJS, Framer Motion |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/desuu12/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your keys from [emailjs.com](https://emailjs.com)

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Deployment

This project is deployed on **Netlify** with continuous deployment from GitHub.

Every `git push` to the `main` branch automatically triggers a new build and deployment.

---

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── netlify.toml
├── index.html
└── package.json
```

---

## Contact

- 📧 Email: desalegndrj11 [at] gmail.com
- 💬 Telegram: [@desaddis11](https://t.me/desaddis11)
- 🐙 GitHub: [github.com/desuu12](https://github.com/desuu12)

---

## License

This project is open source and available under the [MIT License](LICENSE).
