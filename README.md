# Perfect Forms Studio Winterthur 🚀

This is the finalized, high-performance **Vanilla HTML/CSS** version of the Perfect Forms website. All unnecessary React/TS/Vite overhead has been removed to ensure maximum speed and simple editing.

## 🛠 Project Structure
- `index.html`: The main homepage.
- `das-studio.html`, `sun400xl.html`, `preise.html`, `kontakt.html`: Individual sub-pages.
- `style.css`: The central design and layout engine.
- `Images/`: All optimized photographic and icon assets.
- `DESIGN.md`: The official design system tokens (colors, fonts, radii).

## 💻 Local Real-Time Editing
To edit the website and see changes instantly on your Mac:
1. Open any of the `.html` or `.css` files in your text editor.
2. To preview locally, run:
   ```bash
   npm start
   ```
   (This runs a mini-server at `http://localhost:5000`)

## 🌐 How to Update the Live Website
Once you're happy with your local changes, push them to your GitHub:
1. Run:
   ```bash
   git add .
   git commit -m "Describe your update"
   git push origin main
   ```
2. (Optional) To force-deploy a new version to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🎨 Design System
All colors, spacing, and component rules are strictly defined in [DESIGN.md](./DESIGN.md). Always follow these tokens for consistency.
