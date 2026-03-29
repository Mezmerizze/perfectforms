# Perfect Forms - Design System & Styling Guide

Welcome to the **Perfect Forms Design System**. This document outlines the core tokens, structural guidelines, typography, and interactive components that constitute the primary visual language of the website. 

The website uses a modern, responsive vanilla HTML/CSS stack to provide premium UI/UX.

---

## 🎨 1. Color Palette
The color system emphasizes trust, health, and clean aesthetics. We use a combination of slate grays and emerald greens to project a fresh, clinical, yet welcoming environment.

### Primary Colors
- **Emerald Green**: `#10B981` *(Used for CTAs, highlights, active states)*
- **Emerald Hover**: `#059669` *(Used for button highlights)*
- **Teal (Secondary)**: `#0D9488` *(Used sparingly for sub-branding/icons)*

### UI Backgrounds
- **Page Background**: `#F8FAFC` *(A very soft, breathable slate blue/gray)*
- **Card Background**: `#FFFFFF` *(Pure white for maximum readability)*
- **Elevated Surfaces**: `#F1F5F9` *(Used for subtle contrast sections)*

### Text Colors
- **Primary Text**: `#0F172A` *(Deep, contrast-heavy slate for headings)*
- **Secondary Text**: `#475569` *(Softer slate for body copy and descriptions)*
- **Tertiary Text**: `#94A3B8` *(Used for minor labels, timestamps, disabled text)*

---

## 🔤 2. Typography
Our typography creates a professional and high-fidelity rhythm. We utilize three distinct Google Web Fonts for optimal readability and impact.

- **Sans-Serif (`--font-sans`)**: `Inter`
  - Used for standard body text, buttons, tags, and small utility text.
  - Very legible across all screen resolutions.
- **Display (`--font-display`)**: `Poppins`
  - Beautiful geometric characteristics used exclusively for Headings (H1 to h6) and massive numbers (like pricing).
- **Serif (`--font-serif`)**: `Playfair Display`
  - Elegant, classic typeface heavily utilized for sub-branding or premium quotes.

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
- `.btn-primary`: Uses Emerald Green with a subtle glowing green shadow.
- `.btn-outline`: A white, hollow button framed by a `#E2E8F0` border. Expands softly on hover.

### Cards
Cards (like Benefits and Pricing) use heavy border-radius (`1.5rem` to `2.5rem`) and soft `#F1F5F9` utility borders.
- **Bestseller Card Setup**: Reverses the color scheme! The background turns to `#0F172A` while text reverts to white/light slate for instant visual prioritization.

---

## 🪄 5. Animations & Interaction

Interactivity and Micro-animations are deeply ingrained in this design system to achieve a Framer Motion-like fluidity purely natively.

- **Bouncy Hover States**: Important interface elements (like Cards) lift and expand when hovered, guided by an overshooting timing function: `transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`.
- **Text Pups**: Typography elements like pricing integers seamlessly scale by `8%` (`scale(1.08)`) when their parent is hovered giving an immediate, satisfying tactile pop.

### Scroll Reveals (Intersection Observer)
- `.reveal-up`: Translates Y by `+20px` fading to opacity 1 over `0.6s`.
- `.reveal-left` / `.reveal-right`: Translates horizontally making text "slide in" cleanly toward its target bounding box.
- `.delay-[100|200|300|400]`: Utility classes to gracefully stagger the scroll animations.
