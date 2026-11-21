# Perfect Forms - Design System & Styling Guide

Welcome to the **Perfect Forms Design System**. This document outlines the core tokens, structural guidelines, typography, and interactive components that constitute the primary visual language of the website. 

The website uses a modern, responsive vanilla HTML/CSS stack to provide premium UI/UX.

---

## 🎨 1. Color Palette
The site pairs a clean monochrome black, white, and neutral grey foundation with **`#0FB981`** as its single primary accent color.

### Core Swatches
- **Primary Accent (`#0FB981` / hover `#0B9A6B`)** — Primary CTAs, active nav underline, `Empfohlen` badge, 5-star ratings, `500+` stat & `4.9/5.0` orbital score, pricing checkmarks, and footer/mission action icons.
- **Pure White (`#FFFFFF`)** — Page canvas, navbar, and crisp text on black surfaces.
- **Light Greys (`#FAFAFA` / `#F4F4F4` / `#F3F3F3`)** — Cards, form surfaces, FAQ bars, and elevated backgrounds.
- **Border Grey (`#E5E5E5`)** — Subtle hairlines and dividers.
- **Muted Greys (`#737373` / `#525252`)** — Secondary body copy, labels, and captions.
- **Rich Black (`#111111` / `#000000`)** — Primary headings, mission banner, featured `15er Abo` card, orbital rating hub center, CTA panel, and dark footer.

---

## 🔤 2. Typography
Our typography uses **Urbanist** across the entire site for a clean, modern geometric aesthetic.

- **Primary & Display (`--font-sans`, `--font-display`, `--font-serif`)**: `Urbanist` (weights `400`, `500`, `600`, `700`, plus italic `400`).
  - Used consistently for headings, display numbers, body copy, buttons, navigation, and quotes.

---

## 🧱 3. Layout & Structure
The layout system is mobile-first but elegantly scales to extremely large resolutions. 

- **Container Constraint (`--max-width`)**: `1200px` centering all content securely.
- **Spacing Flow**: Distinct padding margins map strictly to `rem` units to ensure accessibility parity. Sections generously use `6rem` paddings vertically to allow elements to "breathe".
- **Glassmorphism Nav**: The Top Navbar utilizes a `backdrop-filter: blur(12px)` and is `sticky` on scroll to keep the user oriented without taking up solid screen real-estate.

---

## ⏺️ 4. UI Components

### Buttons
All buttons feature heavy border-radius (`9999px`) for a "pill" look and deploy sophisticated box-shadows.
- `.btn-primary`: Uses Warm Terracotta (`#C67658`) with a subtle glowing terracotta shadow.
- `.btn-outline`: A white/alabaster button framed by a `#E5E0D5` border. Expands softly on hover with Muted Eucalyptus highlights.

### Cards
Cards (like Benefits and Pricing) use heavy border-radius (`1.5rem` to `2.5rem`) and soft `#E5E0D5` utility borders.
- **Bestseller Card Setup**: Reverses the color scheme! The background turns to Forest Charcoal (`#222925`) while text reverts to warm white/alabaster slate for instant visual prioritization.

---

## 🪄 5. Animations & Interaction

Interactivity and Micro-animations are deeply ingrained in this design system to achieve a Framer Motion-like fluidity purely natively.

- **Bouncy Hover States**: Important interface elements (like Cards) lift and expand when hovered, guided by an overshooting timing function: `transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`.
- **Text Pups**: Typography elements like pricing integers seamlessly scale by `8%` (`scale(1.08)`) when their parent is hovered giving an immediate, satisfying tactile pop.

### Scroll Reveals (Intersection Observer)
- `.reveal-up`: Translates Y by `+20px` fading to opacity 1 over `0.6s`.
- `.reveal-left` / `.reveal-right`: Translates horizontally making text "slide in" cleanly toward its target bounding box.
- `.delay-[100|200|300|400]`: Utility classes to gracefully stagger the scroll animations.
