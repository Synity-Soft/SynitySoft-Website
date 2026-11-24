# SynitySoft — Official Website

> **Official Tagline:** Built Around Need.  
> **Official Colors:** Forest Green (`#172D16`), Dark Green (`#0F2411`), and Neon Lime (`#C7FF00` / `#C2FF00`)  
> **Headquarters:** Daffodil Smart City, Birulia, Savar, Dhaka, Bangladesh.

The official public corporate website for **SynitySoft**, a modern technology and software engineering company creating purposeful digital platforms, offline-first architectures, and intelligent systems.

---

## 🚀 Key Features

- **Distinctive Visual Brand Identity:**
  - Official brand colors: Forest Green (`#172D16`) paired with vibrant Neon Lime accents (`#C7FF00`) and balanced light off-white sections (`#F4F7EF`).
  - Choreographed hero brand reveal: dark forest background, ambient glowing halos, smooth reveal of the official SynitySoft symbol emblem, and fluid typography.
  - Background motion system: gently drifting, floating official logo symbols and geometric particles with physics-based parallax and `prefers-reduced-motion` compliance.

- **Bilingual Localization (English & বাংলা):**
  - Instant language switcher in the navigation bar and footer with preference persistence via `localStorage`.
  - Professional, natural Bangla translation for all pages, navigation, service specifications, project case studies, leadership profiles, and forms.
  - High-clarity typography supporting Inter / Manrope (English) and Hind Siliguri / Noto Sans Bengali (Bangla).

- **100% Verified Company Content:**
  - **Founding Leadership:** Profiles of Safin Khan (Founder & Managing Director / CMO / HR Lead) and Md. Shahriar Rahman (Co-Founder & Chief Executive Officer / CTO / COO).
  - **Engineering Team:** Md. Seam Talukder (Developer Trainee) and Md. Shoaib Khan (Junior Developer Trainee).
  - **Authentic Projects:**
    - **HAAT-BAZAAR (হাট-বাজার):** AI-powered, offline-first grocery inventory & ERP platform with batch-level FIFO expiry management, dual-horizon ML demand forecasting, Bakir Khata, and BazarBondhu AI.
    - **Niramoy (নিরাময়):** AI-powered primary healthcare discovery, dual-language organ-system clinical triage, and HL7 FHIR R4 / ICD-10 standardized health summary platform.
    - **Custom Enterprise Platforms:** Tailored business systems and automation engines.
  - **No Fake Data:** Strict adherence to verified factual information without exaggerated awards, fake client rosters, or fabricated metrics.

- **Interactive Experience & Accessibility:**
  - Fully responsive across desktop, laptop, tablet, and mobile devices.
  - Interactive collaboration & contact form with real-time field validation, error feedback, and submission state handling.
  - SEO optimization: metadata, OpenGraph tags, sitemap (`/sitemap.xml`), and robots (`/robots.txt`).

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript 5.6)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with centralized brand color tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Localization:** Custom reactive client-side Language Context with `localStorage` persistence

---

## 📂 Project Structure

```
├── app/
│   ├── about/            # About Us page
│   ├── contact/          # Interactive contact & collaboration form
│   ├── globals.css       # Tailwind directives & typography rules
│   ├── layout.tsx        # Global layout with metadata, navbar & footer
│   ├── page.tsx          # Homepage
│   ├── projects/         # Detailed projects & platforms showcase
│   ├── robots.ts         # SEO robots.txt generator
│   ├── services/         # Engineering services & deliverables
│   ├── sitemap.ts        # Dynamic XML sitemap generator
│   └── team/             # Leadership & engineering profiles
├── components/
│   ├── brand/            # Official logo & floating motion components
│   ├── home/             # Homepage section components
│   └── layout/           # Sticky Navbar & Footer
├── context/
│   └── LanguageContext.tsx # Bilingual state manager
├── lib/
│   ├── dictionary.ts     # Complete English & Bangla localization content
│   └── types.ts          # TypeScript interfaces
├── public/
│   ├── brand/            # Transparent Web PNGs & SVGs
│   ├── favicon.ico       # Brand favicon
│   └── ...
├── tailwind.config.ts    # Brand tokens & theme extensions
└── next.config.mjs       # Next.js build configuration
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
Ensure you have Node.js (v18+ or v20+) and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment Instructions

### Deploy on Vercel
1. Push the code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete official SynitySoft website"
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**.
4. Build command: `npm run build` (or leave default).
5. Output directory: `.next` (default).
6. Click **Deploy**.

---

## 📞 Official Contacts

- **Business Inquiries:** [synitysoft@gmail.com](mailto:synitysoft@gmail.com)
- **HR & Careers:** [hr.synitysoft@gmail.com](mailto:hr.synitysoft@gmail.com)
- **Direct Hotlines:** +880 1700-526460 / +880 1854-241010
- **Operating Base:** Daffodil Smart City, Birulia, Savar, Dhaka, Bangladesh.

---
© 2026 SynitySoft. Built Around Need.
