# 📝 SPACE CRAFTERS — Complete Project Notes
### Interior Design Website | Full-Stack Web Application

---

## 📌 PROJECT OVERVIEW

**Project Name:** Space Crafters — Premium Interior Design Website  
**Project Type:** Full-Stack Web Application (Frontend + Backend + Database)  
**Purpose:** A professional portfolio & services website for an interior design company  
**Architecture:** Client-Server Architecture with REST API  

---

## 🔢 LANGUAGES USED (Total: 7 Languages)

| # | Language | Where Used | Purpose |
|---|----------|-----------|---------|
| 1 | **TypeScript (TSX)** | Frontend | Main programming language for React components, type-safe code |
| 2 | **JavaScript** | Frontend Config | ESLint config, PostCSS config |
| 3 | **Python** | Backend | API server, database models, business logic |
| 4 | **HTML** | VR Page, Layout | VR experience page, document structure |
| 5 | **CSS (Tailwind CSS)** | Frontend | Styling all components, responsive design |
| 6 | **SQL (SQLite)** | Backend | Database storage for reviews & contacts |
| 7 | **PowerShell** | DevOps | Start script to launch both servers |

---

## 🛠️ FRAMEWORKS & LIBRARIES USED (Total: 15+)

### Frontend Frameworks & Libraries

| # | Library/Framework | Version | Purpose |
|---|------------------|---------|---------|
| 1 | **Next.js** | 16.2.4 | React meta-framework (App Router, SSR, routing) |
| 2 | **React** | 19.2.4 | UI component library |
| 3 | **React DOM** | 19.2.4 | DOM rendering for React |
| 4 | **Framer Motion** | 12.38.0 | Animations, transitions, scroll-triggered effects |
| 5 | **Three.js** | 0.184.0 | 3D graphics rendering (WebGL) |
| 6 | **@react-three/fiber** | 9.6.1 | React renderer for Three.js |
| 7 | **@react-three/drei** | 10.7.7 | Helper components for React Three Fiber |
| 8 | **A-Frame.js** | 1.4.0 | WebVR/WebXR framework for VR experience |
| 9 | **Axios** | 1.16.0 | HTTP client for API calls |
| 10 | **Lucide React** | 1.14.0 | Icon library |
| 11 | **Tailwind CSS** | 4.x | Utility-first CSS framework |
| 12 | **PostCSS** | — | CSS processing |

### Backend Frameworks & Libraries

| # | Library/Framework | Purpose |
|---|------------------|---------|
| 1 | **FastAPI** | Python web framework for building REST APIs |
| 2 | **Uvicorn** | ASGI server for running FastAPI |
| 3 | **SQLAlchemy** | ORM (Object Relational Mapper) for database |
| 4 | **Pydantic** | Data validation and serialization |

### Dev Tools

| # | Tool | Purpose |
|---|------|---------|
| 1 | **TypeScript** | Static type checking |
| 2 | **ESLint** | Code linting and quality |
| 3 | **Git** | Version control |

---

## 🎨 CSS TRICKS & TECHNIQUES USED (Total: 20+)

### 1. **Glassmorphism Effect**
```css
background: rgba(250,249,247,0.85);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.06);
```
- Used in: Navbar, Design Highlights nav, Project pages nav
- Creates a frosted glass look

### 2. **CSS Gradients**
```css
background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
background: linear-gradient(to top, #1a1a1a, transparent);
```
- Used in: Hero overlays, CTA sections, footer backgrounds

### 3. **Responsive Design (Mobile-First)**
- Tailwind breakpoints: `md:`, `lg:` prefixes
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexible layouts for all screen sizes

### 4. **Custom Scrollbar Styling**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #0d0d0d; }
::-webkit-scrollbar-thumb { background: #c29b76; border-radius: 4px; }
```

### 5. **Hover Effects & Transitions**
- Image scale on hover: `hover:scale-105`
- Background overlay change: `bg-black/0 hover:bg-black/30`
- Text color transitions: `hover:text-[#754436]`
- Arrow translate on hover: `group-hover:translate-x-1`

### 6. **Masonry Grid Layout**
- CSS Grid with `col-span-2 row-span-2` for featured items
- Different heights for visual variety

### 7. **Backdrop Blur Badges**
```css
background: rgba(255,255,255,0.2);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.3);
```

### 8. **Image Clip-Path (Before/After Slider)**
- Dynamic clip-path to reveal/hide portions of images
- Mouse/touch-driven position updates

### 9. **SVG Path Animations**
- Custom SVG icons with stroke animations
- Arrow animations in splash screen

### 10. **Dark Theme Design**
- Primary dark: `#0d0d0d`
- Accent gold: `#c29b76`
- Light sections: `#faf9f7`

### 11. **Typography Tricks**
- Google Font: **Outfit** (imported via Next.js)
- Serif fallback: `Georgia, 'Times New Roman', serif` for headings
- Letter spacing: `tracking-[0.3em]` for uppercase text
- Font weight variations for hierarchy

### 12. **Group Hover Pattern**
```html
<div class="group">
  <div class="group-hover:scale-105">...</div>
  <div class="group-hover:translate-y-0">...</div>
</div>
```

### 13. **Fixed Position Navigation**
- `position: fixed` navbar with z-index layering
- Background opacity changes on scroll

### 14. **Smooth Scroll Behavior**
```css
html { scroll-behavior: smooth; }
```

### 15. **Line Clamp for Text Truncation**
```css
line-clamp-3  /* limits text to 3 lines */
```

### 16. **Rounded Corners**
- `rounded-xl`, `rounded-2xl`, `rounded-full`
- Consistent border radius throughout

### 17. **Opacity & Color Layering**
- `bg-black/20`, `bg-white/10` — transparency overlays
- Multiple layered gradients for depth

### 18. **Transform Origin Control**
```css
transform-origin: left; /* For animated underline expansion */
```

### 19. **Responsive Image Handling**
```css
object-cover  /* maintains aspect ratio */
object-contain /* fits within bounds */
```

### 20. **Z-Index Management**
- Navbar: `z-50`
- Lightbox: `z-[100]`
- Proper layering hierarchy

---

## ✨ ANIMATION TRICKS USED (Total: 15+)

### Framer Motion Animations

| # | Animation Type | Where Used | Code Example |
|---|---------------|-----------|--------------|
| 1 | **Fade In + Slide Up** | Almost everywhere | `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}` |
| 2 | **Scale Animation** | Hero image, Lightbox | `initial={{ scale: 1.1 }} animate={{ scale: 1 }}` |
| 3 | **Staggered Animations** | Project cards, Gallery | `transition={{ delay: idx * 0.2 }}` |
| 4 | **Scroll-Triggered** | Showcase, Reviews | `whileInView={{ opacity: 1, y: 0 }}` |
| 5 | **Scroll-Driven Parallax** | ScrollShowcase | `useScroll()` + `useTransform()` |
| 6 | **Scale on Scroll** | Showcase images | `useTransform(scrollYProgress, [0,1], [0.8,1])` |
| 7 | **Line Expansion** | Project heroes | `initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}` |
| 8 | **Multi-Stage Sequence** | SplashScreen | Multiple animations with delays |
| 9 | **Viewport Detection** | All sections | `viewport={{ once: true }}` |
| 10 | **Bounce Animation** | Scroll indicator | CSS `animate-bounce` |
| 11 | **Slide Translate** | Labels on hover | `translate-y-full → translate-y-0` |
| 12 | **Opacity Transitions** | Badges, overlays | `opacity-0 → opacity-100` |
| 13 | **Lightbox Enter** | Photo gallery | `initial={{ scale: 0.8 }} animate={{ scale: 1 }}` |
| 14 | **SVG Path Draw** | Splash screen | Custom path animation |
| 15 | **Easing Functions** | Throughout | `ease: "easeOut"`, custom easing |

---

## 🧩 FEATURES / SECTIONS OF THE WEBSITE

### Homepage Sections (9 Sections)
1. **Splash Screen** — Animated loading intro with logo
2. **Navbar** — Fixed glassmorphism navigation with mobile menu
3. **Hero Section** — Full-screen background with animated text
4. **Scroll Showcase** — Parallax image gallery
5. **Before/After Comparison** — Interactive image slider
6. **AI Style Recommender** — ML-powered design suggestion
7. **Reviews Section** — Customer testimonials from database
8. **Contact Form** — Form that saves to database via API
9. **Footer** — Company info, social links

### Other Pages (5 Pages)
1. **Projects Listing** (`/projects`) — Portfolio overview grid
2. **The Patil House** (`/projects/the-patil-house`) — Project detail with gallery
3. **Saga Enstin** (`/projects/saga-enstin`) — Project detail with gallery
4. **The Alodariya House** (`/projects/the-alodariya-house`) — Project detail with gallery
5. **Design Highlights** (`/design-highlights`) — Scroll showcase page

---

## 🌐 API ENDPOINTS (Total: 6)

| # | Method | Endpoint | Purpose |
|---|--------|----------|---------|
| 1 | `GET` | `/` | Welcome message |
| 2 | `POST` | `/reviews/` | Create a new review |
| 3 | `GET` | `/reviews/` | Fetch all reviews |
| 4 | `POST` | `/contact/` | Submit contact form |
| 5 | `POST` | `/recommend-style/` | Get AI style recommendation |
| 6 | `POST` | `/admin/import-google-reviews/` | Import mock Google reviews |

---

## 🗄️ DATABASE TABLES (Total: 2)

### Reviews Table
| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Primary key |
| author | String | Reviewer name |
| rating | Float | Star rating |
| content | Text | Review text |
| created_at | DateTime | Timestamp |
| source | String | "website" or "google" |

### Contacts Table
| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Primary key |
| name | String | Contact name |
| email | String | Contact email |
| message | Text | Contact message |
| created_at | DateTime | Timestamp |

---

## 🎯 SPECIAL / ADVANCED FEATURES

### 1. 🧊 3D Room Visualization (Three.js)
- Interactive 3D scene using WebGL
- React Three Fiber for declarative 3D
- Drei helpers for camera controls
- Real-time 3D rendering in browser

### 2. 🥽 VR/AR Experience (A-Frame.js)
- 360° panoramic room view
- 3D furniture objects (box, sphere, cylinder)
- VR headset compatible (WebXR)
- Cursor-based interaction
- Accessible via QR code

### 3. 🤖 AI Style Recommendation
- Backend ML model (keyword-based matching)
- Styles: Minimalist, Scandinavian, Industrial, Modern Contemporary
- Real-time API call from frontend
- Dynamic result display with animations

### 4. 📸 Before/After Image Comparison
- Interactive drag slider
- Mouse & touch support
- Real-time image clipping
- Smooth drag experience

### 5. 🖼️ Lightbox Photo Gallery
- Click-to-zoom image viewer
- Previous/Next navigation
- Keyboard-friendly
- Overlay with backdrop blur

### 6. ⭐ Google Reviews Integration
- Mock Google Reviews import
- Database-backed reviews
- API-driven review display
- Star rating system

### 7. 📱 Responsive Design
- Mobile hamburger menu
- Responsive grids (1/2/3 columns)
- Touch-friendly interactions
- All screen sizes supported

### 8. 🎬 Splash Screen Animation
- Multi-stage animation sequence
- Logo animation with SVG
- Smooth fade-out transition
- Auto-dismiss timing

---

## 📂 PROJECT STRUCTURE

```
Space Crafters/
├── frontend/                    # Next.js 16 Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── layout.tsx            # Root layout + SEO
│   │   │   ├── globals.css           # Global styles
│   │   │   ├── design-highlights/
│   │   │   │   └── page.tsx          # Design showcase page
│   │   │   └── projects/
│   │   │       ├── page.tsx              # Projects listing
│   │   │       ├── the-patil-house/
│   │   │       │   └── page.tsx          # Patil House detail
│   │   │       ├── saga-enstin/
│   │   │       │   └── page.tsx          # Saga Enstin detail
│   │   │       └── the-alodariya-house/
│   │   │           └── page.tsx          # Alodariya House detail
│   │   └── components/
│   │       ├── SplashScreen.tsx       # Animated intro (13KB!)
│   │       ├── Navbar.tsx             # Glass navbar
│   │       ├── HeroSection.tsx        # Hero banner
│   │       ├── ScrollShowcase.tsx     # Parallax gallery
│   │       ├── BeforeAfter.tsx        # Image comparison
│   │       ├── AIStyleRecommender.tsx # AI recommendations
│   │       ├── Reviews.tsx            # Customer reviews
│   │       └── ThreeRoom.tsx          # 3D room scene
│   ├── public/
│   │   ├── logo.png                   # Company logo
│   │   ├── hero-bg.jpg               # Hero background
│   │   ├── vr.html                    # VR experience page
│   │   ├── vr-qr.jpg                 # QR code for VR
│   │   ├── projects/                  # Project images (35+ photos)
│   │   └── showcase/                  # Showcase images
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
│
├── backend/                     # Python FastAPI Application
│   ├── main.py                  # API endpoints (6 routes)
│   ├── models.py                # SQLAlchemy ORM models
│   ├── schemas.py               # Pydantic validation schemas
│   ├── database.py              # Database connection config
│   ├── requirements.txt         # Python dependencies
│   ├── interior.db              # SQLite database file
│   └── venv/                    # Python virtual environment
│
├── start.ps1                    # PowerShell startup script
└── .gitignore
```

---

## 📊 PROJECT STATISTICS

| Metric | Count |
|--------|-------|
| Total Languages | 7 |
| Total Frameworks/Libraries | 15+ |
| Frontend Components | 8 |
| Total Pages | 6 |
| API Endpoints | 6 |
| Database Tables | 2 |
| CSS Tricks | 20+ |
| Animation Types | 15+ |
| Project Images | 35+ |
| Special Features | 8 |
| Total Files (excluding node_modules) | 30+ |

---

## ❓ COMMON INTERVIEW/VIVA QUESTIONS & ANSWERS

### Q1: What is this project about?
**A:** Space Crafters is a full-stack interior design portfolio website. It showcases interior design projects with interactive features like 3D room visualization, VR walkthrough, AI-powered style recommendations, and before/after comparisons.

### Q2: What architecture did you use?
**A:** Client-Server Architecture. The frontend is built with Next.js (React) and the backend with Python FastAPI. They communicate via REST API calls using Axios.

### Q3: Why did you choose Next.js?
**A:** Next.js provides server-side rendering (SSR) for better SEO, file-based routing for easy page management, and optimized performance with automatic code splitting.

### Q4: What is Framer Motion and why did you use it?
**A:** Framer Motion is a React animation library. I used it for scroll-triggered animations, page transitions, hover effects, and the splash screen animation sequence.

### Q5: How does the AI Style Recommender work?
**A:** The frontend sends user preferences to the FastAPI backend via POST request. The backend analyzes keywords in the preferences and recommends a style (Minimalist, Scandinavian, Industrial, or Modern Contemporary) using a keyword-matching algorithm.

### Q6: What database did you use and why?
**A:** SQLite with SQLAlchemy ORM. SQLite is lightweight, serverless, and perfect for small-to-medium applications. SQLAlchemy provides an easy-to-use Python interface for database operations.

### Q7: What is Glassmorphism?
**A:** Glassmorphism is a design trend that creates a frosted glass effect using CSS `backdrop-filter: blur()`, semi-transparent backgrounds, and subtle borders. I used it on the navbar and navigation bars.

### Q8: How does the Before/After slider work?
**A:** Two images are stacked. A draggable slider controls a CSS clip-path that reveals/hides portions of each image. Mouse and touch events track the slider position in real-time.

### Q9: What is Three.js and how did you use it?
**A:** Three.js is a JavaScript library for 3D graphics using WebGL. I used React Three Fiber (a React renderer for Three.js) to create an interactive 3D room visualization.

### Q10: How does the VR feature work?
**A:** The VR experience uses A-Frame.js, a WebVR framework. It creates a 360° panoramic view with 3D furniture objects. It's compatible with VR headsets and accessible via a QR code.

### Q11: How do you run the project?
**A:** Run the `start.ps1` PowerShell script, which launches both:
- Backend: `uvicorn main:app --reload` on port 8000
- Frontend: `npm run dev` on port 3000

### Q12: What is CORS and why is it needed?
**A:** CORS (Cross-Origin Resource Sharing) is needed because the frontend (port 3000) and backend (port 8000) run on different origins. FastAPI's CORS middleware allows the frontend to make API requests to the backend.

### Q13: What is Pydantic?
**A:** Pydantic is a Python library for data validation. It defines schemas that automatically validate incoming API request data (correct types, required fields) before processing.

### Q14: How is the website responsive?
**A:** Using Tailwind CSS responsive utilities (`md:`, `lg:` breakpoints), flexible grid systems (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), and a mobile hamburger menu.

### Q15: What design patterns did you use?
**A:** Component-based architecture (React), MVC pattern (backend), ORM pattern (SQLAlchemy), Repository pattern (database session management), and REST API design.

---

*Last Updated: June 2026*
*Project: Space Crafters | Interior Design Website*
