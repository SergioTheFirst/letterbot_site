# Letterbot GitHub Pages Site

Premium AEO/SEO-optimized English site for Letterbot.

## Pages (14)
- `index.html` — Hero + Q&A-first overview, FAQ preview, donate CTA
- `features.html` — Every feature as Q&A
- `how-it-works.html` — 6-stage pipeline explained
- `install.html` — 3-step setup guide, download
- `faq.html` — 30+ questions with full FAQPage Schema.org
- `compare.html` — Honest comparison table + 5-year cost data
- `privacy.html` — Technical data flow breakdown
- `use-cases.html` — 3 user profiles + "old laptop" scenario
- `observability.html` — Local web cockpit documentation
- `support.html` — Donation page with psychology
- `changelog.html` — Version history v26–v28
- `blog/why-letterbot-exists.html` — Author opinion piece (AEO entity signal)
- `blog/email-ai-guide.html` — Original technical content (citable by AI)
- `404.html` — Branded error page

## AEO principles applied (from vc.ru/ai/2758129)
1. Q&A-first: every section title is a question, answer in first sentence
2. Original data AI can't generate: 5-year cost table, data flow table, SLA metrics
3. FAQPage JSON-LD: 30 questions on faq.html, 4 on index.html
4. SoftwareApplication JSON-LD: on every page
5. Comparison page: calm table, includes "when NOT to use Letterbot"
6. Blog as entity signal: two original articles with author voice
7. Positive framing only: no negative posturing, just direct answers
8. Donation psychology: explain why it matters, no pressure

## Deploy to GitHub Pages
1. Push all files (keeping directory structure) to your repository root
2. Settings → Pages → Source: Deploy from branch → branch: main, folder: / (root)
3. Update `assets/config.js` with your final repo URL if different
4. Update `assets/config.js` `releases` URL when you publish a release tag

## Update links
Edit `assets/config.js` only — all links are wired from there via JavaScript.

## Contact
master@letterbot.ru
