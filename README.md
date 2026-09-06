# Aishika Das - Personal Portfolio Website

A portfolio website for **Aishika Das** — UI/UX Designer, Prompt Engineer, and AI-Assisted Product Designer. Engineered with modern semantic HTML5, high-performance vanilla CSS design tokens, interactive micro-interactions, dark/light theme toggle, and an interactive **AI & Prompt Engineering Workbench**.

![Deploy with Vercel](https://vercel.com/button)

---

## ✨ Key Highlights & Features

- **Hero & Identity Section:** High-impact typography, status badge, live contact chips with 1-click clipboard copy, and responsive navigation.
- **Experience Timeline:** Detailed breakdown of work at:
  - **Habot Connect DMCC** (Enterprise HR Dashboards, Healthcare UI, Prompt Engineering, WF to DF Transformation).
  - **Codsoft** (Mobile App UI, Frictionless Sign-Up & Onboarding Design, Interactive Prototyping).
  - **Webskitters Technology Solutions** (Responsive Web & E-Commerce Platforms, Design Systems & Component Libraries).
- **Filterable Project Showcase & Modal Case Studies:**
  - *Featured & Figma Projects:* Real Estate Website, Gym Website, Beauty Product Purchasing Website, Mobile Sign-Up Screen Design, Coffee Purchasing Website (each with direct Figma canvas links).
  - *Enterprise SaaS & Healthcare:* HR Dashboard, Clinic & Healthcare Portal, Workflow to Data Flow Transformation, AI Prompt Engineering & NotebookLM.
  - *Case Study Modals:* Deep dive into problem statements, design strategies, measurable metrics, deliverables, and live Figma files.
- **Skills Matrix:** Visually categorized into UI/UX Design, AI & Prompt Engineering, Tools & Prototyping, Design Principles (Material Design 3), and Languages.
- **Qualifications:** Google UX Design Professional Certificate badge (Coursera) and Calcutta University degree details.
- **Direct Contact Hub:** Quick-action buttons for email, phone/WhatsApp, LinkedIn, and print/save-as-PDF.
- **Dark/Light Theme:** Cheongsachorong lantern interactive theme switcher with persistent local storage state.

---

## 🚀 How to Deploy to Vercel

You can deploy this website to Vercel in **less than 1 minute** using any of the following methods:

### Method 1: Deploy via GitHub (Recommended)
1. Initialize git in this folder and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   # Create a repository on GitHub, then link:
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and log in.
3. Import your `portfolio` repository.
4. Click **Deploy**. Vercel will automatically detect the static project and deploy it instantly!

### Method 2: Deploy via Vercel CLI
1. Open PowerShell or Terminal in this folder (`c:\Users\ASUS\OneDrive\Desktop\ADP`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the interactive prompts (Accept defaults). Your site will be live on a `*.vercel.app` URL immediately.
4. For production deployment:
   ```bash
   npx vercel --prod
   ```

### Method 3: Drag & Drop Deploy
1. Visit [vercel.com](https://vercel.com) dashboard.
2. Drag and drop this folder (`ADP`) directly into the Vercel project import screen.

---

## 📁 Project Structure

```
ADP/
├── index.html       # Semantic HTML5 single-page application
├── style.css        # Responsive CSS design system (Dark/Light tokens, Glassmorphism)
├── script.js        # Interactive engine (Modals, Prompt Lab, Project filters, Theme engine)
├── vercel.json      # Vercel deployment configuration (Security & caching headers)
└── README.md        # Documentation and deployment instructions
```

---

## 🛠️ Local Development & Preview

To preview the portfolio locally, you can use any of the following methods:

### Option A: Open directly in Browser (Zero Dependencies)
Double-click `index.html` or run in PowerShell:
```powershell
Start-Process .\index.html
```

### Option B: Built-in PowerShell Local Server (Port 3000)
Run the included `server.ps1` script:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
This serves the site at `http://localhost:3000/` and automatically opens it in your default browser.

### Option C: Using Node.js or Python (If installed)
```bash
# Using Node
npx serve .

# Using Python
python -m http.server 3000
```

