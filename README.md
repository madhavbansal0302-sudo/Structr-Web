# Structr Website

Static website for Structr — AI Automation Agency.

## File structure

```
/
├── index.html          # Homepage
├── services.html       # Services detail page
├── about.html          # About page
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # All styles — edit :root variables to retheme
├── js/
│   └── main.js         # Nav toggle, active links, form handling
└── assets/
    └── logo.png        # ← Place your logo file here
```

## Setup

No build step required. Open any `.html` file directly in a browser, or serve with any static host.

## Adding your logo

Place your logo image at `assets/logo.png`. The nav will show it automatically. If the file is missing, it falls back to the text wordmark "STRUCTR".

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your GitHub repo
4. Set **Source** to `Deploy from a branch`, branch = `main`, folder = `/ (root)`
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

For a custom domain (e.g. `structr.agency`), add a `CNAME` file containing your domain name, then configure your DNS to point to GitHub Pages.

## Connecting the contact form

The contact form in `contact.html` currently shows a success message client-side only. To make it actually send emails:

**Option A — Formspree (easiest, free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your Form ID
3. In `contact.html`, find the `<form id="contact-form">` tag and change it to:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `e.preventDefault()` line in `js/main.js` under the contact form section

**Option B — EmailJS (client-side, no backend)**
See [emailjs.com](https://www.emailjs.com) for setup instructions.

## Editing colours

All brand colours are defined as CSS variables at the top of `css/style.css` inside `:root { }`. Change them there and they'll update site-wide.

## Editing content

All copy is plain HTML — find the section you want to edit in the relevant `.html` file and update the text directly. Sections are clearly commented (e.g. `<!-- HERO -->`, `<!-- SERVICES PREVIEW -->`).
