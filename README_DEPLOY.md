# Letterbot Site — Deployment

## GitHub Pages (default)

1. Push this folder to `main` branch of `letterbot_site` repo
2. GitHub Pages serves from root automatically (`.nojekyll` present)
3. Custom domain: add CNAME file with `letterbot.ru` if needed

## Structure

```
index.html          — homepage (hero + features + FAQ preview + donate)
features.html       — full feature list
how-it-works.html   — architecture + pipeline
install.html        — download + setup guide
faq.html            — 25 Q&A pairs with Schema.org FAQPage
compare.html        — vs Superhuman/SaneBox/Zapier
privacy.html        — data handling explanation
support.html        — Boosty + CloudTips donate page
use-cases.html      — 5 real-world scenarios
observability.html  — web cockpit description
changelog.html      — version history
blog/               — 2 evergreen articles
assets/             — CSS, JS, config, QR, OG image
```

## SEO / GEO Optimization

- Every page has unique `<title>`, `<meta description>`, `<link rel="canonical">`
- Schema.org: SoftwareApplication + FAQPage on index
- FAQ answers start with the direct answer in the first sentence
- Compare page honestly shows when competitors are better
- sitemap.xml with priority weights
- robots.txt allows all crawlers
- All pages have `og:image` meta tags
- Answer-first content structure for AI citation

## Updating

- Edit `assets/config.js` to update version/links
- Add date stamps to page content quarterly
- Keep FAQ page at 25+ questions
- Refresh compare table when competitor pricing changes

## Donate Integration

- Boosty QR: `assets/boosty_qr.svg`
- Boosty URL: `https://boosty.to/personalbot/donate?qr=true`  
- CloudTips: `https://pay.cloudtips.ru/p/00d77c6a`
- Donate strip appears on index.html bottom
- Full donate page at support.html
