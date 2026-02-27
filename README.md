# Xenon

Xenon is a stylish minimal search start page with theme, language, and liquid glass controls.

## Features

- Fast search redirect to Google (`https://www.google.com/search?q=...`)
- Language switch: Russian / English
- Theme switch: Light / Dark
- Liquid Glass mode toggle
- Separate About page with custom design
- Preference persistence via `localStorage`

## Project Structure

- `index.html` - main search page
- `about.html` - project About page
- `assets/css/reset.css` - base reset
- `assets/css/theme.css` - theme and glass variables
- `assets/css/layout.css` - main page layout/components
- `assets/css/about.css` - About page styles
- `assets/js/app.js` - app bootstrap
- `assets/js/search.js` - search submit + redirect logic
- `assets/js/theme.js` - light/dark theme toggle
- `assets/js/glass.js` - liquid glass toggle
- `assets/js/i18n.js` - RU/EN translations and text updates

## Persistence Keys

- `xenon-theme` - `light` or `dark`
- `xenon-glass` - `on` or `off`
- `xenon-lang` - `ru` or `en`

## Run

Open `index.html` in any modern browser.
