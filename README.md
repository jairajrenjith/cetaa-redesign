# CETAA — College of Engineering Trivandrum Alumni Association
### Official Website Prototype · 2026

A complete two-page static website built for the CET Alumni Association (CETAA), designed to surpass the existing alumni portal at [alumni.cet.ac.in](https://alumni.cet.ac.in) in design quality, content depth, and interactivity.

---

## Pages

### `index.html` — Home
The main landing page. Reflects CETAA's identity, legacy, and global community.

### `renovation.html` — Diamond Jubilee Hall Renovation
A dedicated campaign page to seek financial support from alumni worldwide for the renovation of the Diamond Jubilee Auditorium at CET.

---

## File Structure

```
cetaa-website/
│
├── index.html                   # Home / Creative Page
├── renovation.html              # Diamond Jubilee Hall Renovation Page
├── README.md
│
└── assets/
    ├── cetaa-logo.jpg           # CETAA logo (navbar + footer)
    ├── cet-campus.jpg           # CET campus photo (about section)
    ├── hall-exterior.jpg        # Diamond Jubilee Hall exterior (renovation hero)
    ├── hall-current.png         # Hall interior — current state
    ├── hall-proposed.png        # Hall interior — proposed render
    │
    ├── slides/                  # Hero slideshow images (24 CET campus photos)
    │   ├── 1.png                # CET main gate (first slide, with welcome overlay)
    │   ├── 2.png
    │   ├── 3.png
    │   └── ...24.png
    │
    ├── gallery/                 # Gallery section images
    │   ├── g1.png
    │   ├── g2.png
    │   └── ...g6.png
    │
    └── members/                 # Latest Members section photos
        ├── m1.png
        ├── m2.png
        └── ...m19.png
```

---

## Features

### Global
- **Dark / Light mode** — toggle via the navbar icon; preference persists across pages using `localStorage`
- **Animated background** — interactive particle-and-line canvas that responds to cursor movement, with a radial glow following the mouse
- **Scroll reveal animations** — elements fade and slide in as they enter the viewport
- **Fully responsive** — mobile hamburger menu, fluid grids, and adaptive layouts down to 375px
- **No frameworks or build tools** — pure HTML, CSS, and vanilla JS; runs directly in the browser

### Home Page (`index.html`)

| Section | Details |
|---|---|
| **Navbar** | Fixed, blur-backdrop navbar with all CETAA nav links, dark/light toggle, Login and Register buttons, mobile drawer |
| **Hero** | Two-column layout with headline, tagline, stats (85+ years, 20K+ alumni, 30+ chapters), and a 24-image slideshow |
| **Slideshow** | Auto-advances every 4.5s with crossfade + Ken Burns zoom; first slide shows a 4-second welcome message overlay; prev/next arrows; dot indicators |
| **About** | CET history text card + President's Message and Secretary's Message cards with hover image parallax |
| **Newsroom** | Three latest news items with thumbnails, dates, and excerpts (1976 Batch gratitude, Souvenir 2026, GEMS Scholarship) |
| **Events** | Sidebar card with upcoming CETAA Day 2026 and past events |
| **Distinguished Alumni** | Grid of notable alumni cards with initials avatars, batch year, and role |
| **CETAA Chapters** | Chip grid of all 24 global chapters from Atlanta to UAE |
| **Gallery** | Asymmetric masonry-style grid of 6 event photos; click any image to open a full-screen lightbox; Escape key closes it |
| **Latest Members** | Horizontally scrollable strip of 19 member profile photos |
| **Renovation CTA** | Full-width banner strip linking to the renovation page |
| **Social Links** | Facebook, Twitter/X, LinkedIn, YouTube, CET website |
| **Footer** | Brand, nav links, copyright |

### Renovation Page (`renovation.html`)

| Section | Details |
|---|---|
| **Hero** | Full-bleed Diamond Jubilee Hall exterior photo with gradient overlay, headline, and dual CTAs |
| **Funding Progress** | Animated progress bar (triggers on scroll) showing ₹38.5L raised of ₹75L goal, with 4 funding stats |
| **Project Overview** | 4 overview cards — Central AC, Modern Seating, AV & Stage Upgrades, Facade & Surroundings |
| **Before / After** | Side-by-side comparison of current and proposed hall interior with labelled image cards |
| **Work Breakdown** | Scope table listing all renovation components with estimated costs and status badges (Planned / In Progress / Completed) |
| **Contribution Tiers** | 4 tiers — Supporter (₹1K), Contributor (₹5K), Patron (₹25K, featured), Benefactor (₹1L+) — each with benefits and a donate CTA |
| **Donation Form** | Name, email, batch year, amount (quick-select chips + custom input), message field, and submit handler |
| **Social Share** | Facebook, Twitter/X share links and a copy-link button |

---

## Design System

| Token | Value |
|---|---|
| Primary accent | `#1a56db` (CET navy-electric) |
| Gold | `#c9973a` (institution gold) |
| Dark background | `#0b0f1a` |
| Light background | `#f5f6fa` |
| Border radius | `1.5rem` (cards), `0.75rem` (chips/tags) |
| Primary font | Inter |
| Display font | Playfair Display |
| Mono font | Space Mono |

All colors are CSS custom properties (`--accent`, `--gold`, `--bg`, `--text`, etc.) that swap automatically between dark and light themes.

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no dependencies, no build step
- **Google Fonts** — Inter, Playfair Display, Space Mono
- **Canvas API** — animated particle background
- **Intersection Observer API** — scroll-triggered reveal animations and progress bar trigger
- **localStorage** — theme preference persistence
