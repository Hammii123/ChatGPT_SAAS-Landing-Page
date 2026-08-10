# ChatGPT — SaaS Landing Page

A responsive marketing landing page built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. Showcases a typical SaaS product layout: hero section, services, features, testimonials, pricing, and footer, with a mobile-friendly hamburger navigation menu.

## Features

- Sticky navigation bar with smooth-scroll anchor links to each section
- Fully responsive hamburger menu for mobile screens, built with vanilla JavaScript (dynamic height calculation so it fits any number of links)
- Sections included:
  - **Hero / Introduction** — headline, description, product image
  - **Services** — grid of feature cards with icons
  - **Features** — highlight section with supporting image and checklist
  - **Reviews** — user testimonial cards
  - **Pricing** — 3-tier pricing table (Free / Plus / Team)
  - **Footer** — brand info and quick links
- Responsive grid layouts that adapt from 1 column (mobile) up to 4 columns (desktop) depending on section
- Hover effects and smooth transitions throughout

## Getting Started

No installation or build step required.

1. Clone or download this repository
2. Open `index.html` in any modern browser

```bash
git clone https://github.com/your-username/chatgpt-landing-page.git
cd chatgpt-landing-page
```

Then just double-click `index.html`, or open it via a local server (e.g. the VS Code "Live Server" extension) for the best experience — especially to preview the mobile hamburger menu using your browser's device toolbar (F12 → toggle device toolbar).

## Project Structure

```
chatgpt-landing-page/
├── index.html   # Page structure and content
├── style.css    # Styling, layout, and responsive design
├── script.js    # Mobile hamburger menu toggle logic
└── README.md
```

## How the Mobile Menu Works

- On screens narrower than `786px`, the nav links collapse behind a hamburger button (`☰`).
- Clicking the button toggles an `.open` class on the nav list.
- JavaScript measures the menu's real content height (`scrollHeight`) and sets `max-height` to match — so the menu always expands to fit every link, no matter how many are added later.
- Clicking any link inside the menu automatically closes it, so users aren't left with an open menu covering the page after navigating to a section.

## Built With

- HTML5
- CSS3 (Flexbox, CSS Grid, media queries)
- Vanilla JavaScript (ES6+)

## License

Free to use for learning purposes.
