# Romantic Proposal Website

A beautiful, emotional, and fully responsive proposal website perfect for Propose Day or any special romantic occasion.

## Features

- **Romantic Theme**: Soft pink, red, white, and pastel gradient colors
- **Smooth Animations**: Typing effects, floating hearts, transitions
- **Glassmorphism Design**: Modern glass-effect cards with soft shadows
- **Background Music**: Autoplay music with mute/unmute control
- **Multiple Sections**:
  - Hero section with typing animation
  - Photo gallery with lightbox
  - Love letter section
  - Reasons why I love you cards
  - Interactive proposal section
- **Interactive Buttons**:
  - YES button triggers confetti celebration
  - NO button playfully dodges the cursor
- **Fully Responsive**: Works perfectly on mobile and desktop

## How to Customize

### 1. Personal Messages

**Hero Section** (index.html, line 37):
```html
<p class="hero-subtitle" id="typingText"></p>
```

Change the typing text in script.js (line 17):
```javascript
const text = "Your custom message here...";
```

**Love Letter** (index.html, lines 82-92):
- Edit the paragraphs inside `.letter-content` div
- Personalize the signature

**Footer** (index.html, lines 175-178):
- Add your name
- Update the date

### 2. Photos

Replace the gallery images (index.html, lines 48-73):
- Replace the Pexels URLs with your own photos
- Update captions in `data-caption` attributes
- Recommended: Use your own photos hosted online or in a local `images/` folder

Example:
```html
<div class="gallery-item" data-caption="Our First Date">
    <img src="images/first-date.jpg" alt="First Date">
    <div class="gallery-overlay">
        <p>Our First Date</p>
    </div>
</div>
```

### 3. Background Music

Replace the music (index.html, line 27):
```html
<source src="your-music-file.mp3" type="audio/mpeg">
```

Recommended romantic songs (find royalty-free versions):
- "Perfect" by Ed Sheeran
- "All of Me" by John Legend
- Any instrumental love song

### 4. Reasons Why I Love You

Edit the reason cards (index.html, lines 108-143):
- Change the emoji icons
- Update titles and descriptions
- Add or remove cards as needed

### 5. Color Scheme

Modify colors in styles.css (lines 11-18):
```css
:root {
    --primary-pink: #ff69b4;
    --soft-pink: #ffb6c1;
    --light-pink: #ffc0cb;
    --pale-pink: #ffe4e1;
    --white: #ffffff;
    --dark-text: #333333;
    --light-text: #666666;
    --red: #ff1744;
}
```

### 6. Proposal Message

Edit the main proposal text (index.html, line 148):
```html
<h2 class="proposal-title">Will You Be Mine Forever? 💍</h2>
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

### Option 1: Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Deploy automatically

### Option 2: Vercel
1. Import your GitHub repository
2. Vercel will auto-detect Vite
3. Deploy with one click

### Option 3: GitHub Pages
1. Run `npm run build`
2. Push the `dist` folder to GitHub Pages
3. Configure your repository settings

## Tips for the Perfect Proposal

1. **Test Everything**: Make sure music plays and all animations work
2. **Use Your Photos**: Replace placeholder images with real memories
3. **Personalize Messages**: Write from your heart
4. **Choose the Right Music**: Pick a song meaningful to both of you
5. **Test on Mobile**: Ensure it looks great on the device they'll use
6. **Share the Link**: Send them the website URL or present it in person

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Credits

- Built with HTML, CSS, and JavaScript
- Stock photos from Pexels (replace with your own)
- Background music from Pixabay (replace with your choice)

## License

Feel free to use and customize this for your personal proposal!

Made with Love ❤️
