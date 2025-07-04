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
- AuthOptions page(account with google and github account)
- Signup - creating one state(initial value of an object) for multiple form inputs(controlled inputs by react)
- Abstract the logic of empty field error in the helper function
- Added invisible label tag for SEO and better accessibility(screen reader only(sr-only className in t.css))
- Added icons for empty input fields
- Added timeout using useEffect on errors
- Dynamically added validation message
- Show/hide password icon
- Created custom hooks to make code more readable, modular and reusable.
- Did same for signin
- Styling rest of it
- Created tooltip for rest login options
- firebase config file and setup. adding to .gitignore as well
- Created Email Verification Modal after filling up the signup form and added two buttons(resend link and start again).
- Used firebase functions to create user and send verification email.
- stored formData temporarily in localStorage to first verify the email.
- created two states to handle success and error messages for user created and verification email sent.
- bg blur on signup-signin and email verification modal
- 3 second timeout on success or error message on resend email and form submission(reusing custom hook).
- added animation to the success or error message on resend email and form submission and minor bug related to font fixed.
- added spinner on creating an account and disabled the button to prevent multiple submit.
- structured the folder for components separately(first for signin-signup).
- made code more modular, readable and reusable.
- created FormWrapper component

how am i making UI better:-
- consistent same color theme

how am i making UX better:-
- changing input field error on every input change
- A show/hide password icon
- disable button and adding spinner 

how am i making SEO better:-
- HTML5 semantic tags
- label tags for screen reader only with input so screen reader can understand what is this input for
- aria-label tag for buttons(icons or not descriptive)

how am i writing code better:- 
- proper folder structure
- using custom hooks to make code modular, manageable, reusable and readable
- config driven UI
- DRY concept

bugs need to be fix:-
- animation not working correctly for AuthStatusMessage

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