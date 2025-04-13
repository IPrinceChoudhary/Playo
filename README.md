# Playo (Frontend)

A feature-rich video player built with React, Tailwind CSS, YouTube APIs and other libraries. Includes authentication, playlists, and a custom video player.

Initializing:- 
- import react with vite(bundler)
- import tailwind(4th version) and setup tailwind
- decide color theme
- import google fonts(Monsterrat for headings and Lato for paragraphs)
- using css variables in index file for fonts and color themes
- layout, pages, utils, assets, components folder and config.js created
- added svg logo (fastest and less space and customizable)
- added menu bar (react icons library)
- added search bar
- added search icon
- added singin | signup buttons
- firebase project created in firebase and firebase setup
- planned the design, structure and flow of signin, signup and sing out functionality

- creating AuthModal modal:-
- cross button
- tabbed modal to switch between signup and signin
- made code for signin and signup more readable, efficient and manageable
- created 2 separate components for both tabs
- created config for Auth modal (config driven UI)(DRY)
- mapping input fields with unique key and optional chaining
- AuthOptions page(account with google and guest account)
- Signup - creating one state(initial value an object) for multiple form inputs(controlled inputs by react)
- Abstract the logic of empty field error in the helper function
- Added invisible label tag for SEO and better accessibility(screen reader only(sr-only className in t.css))
- Added icons for empty input fields
- Added timeout using useEffect on errors
- Dynamically added validation message
- Show/hide password icon
- Created custom hooks to make code more readable, modular and reusable

how am i making UX better:-
- changing input field error on every input change
- A show/hide password icon

## 🚀 Features
- **Video Player**: Play/pause, volume control, fullscreen, subtitles.
- **Google Auth**: Login/logout using Firebase.
- **Search**: Real-time video search with debouncing.
- **Playlists**: Create, edit, and save playlists (stored in `localStorage`).
- **Dark Mode**: Toggle between light/dark themes.
- **Responsive UI**: Works on mobile, tablet, and desktop.

## 📸 Screenshots
| Homepage | Video Player | Playlists |
|----------|--------------|-----------|
| ![Homepage](screenshots/home.png) | ![Player](screenshots/player.png) | ![Playlists](screenshots/playlists.png) |

## 🔧 Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/youtube-clone.git