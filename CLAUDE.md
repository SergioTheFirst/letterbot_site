# Letterbot Site — Project Memory

## Project
- Repo: `SergioTheFirst/letterbot_site`
- Live: https://sergiothefirst.github.io/letterbot_site/
- Language: **English only** (no Russian pages)
- Stack: Static HTML/CSS, GitHub Pages

## Key contacts & donation links (must never be lost)
- Email: master@letterbot.ru
- Telegram channel: https://t.me/+1xHH6NwJONVlZTA6
- Boosty: https://boosty.to/personalbot/donate?qr=true
- CloudTips: https://pay.cloudtips.ru/p/00d77c6a

## Current version
- Letterbot v28.0.0
- Site last updated: **April 27, 2026**
- Python codebase: 74,000 lines, 1,541 tests (138 golden corpus)

## SEO/GEO optimization — completed April 27, 2026

Branch `claude/seo-citation-optimization-tGtSb` merged to main.

### What was done (AI citation / GEO optimization for Google/ChatGPT):

**index.html**
- Stats bar expanded to 6 stats: $0, ∞ inboxes, 1,541 tests, 74K lines, 40–120 MB RAM, read-only
- "What is Letterbot?" definition section with `<dfn>` + 4 fact-items (citable chunks)
- FAQ expanded to 8 questions with first-sentence-answer format
- Multi-schema JSON-LD: SoftwareApplication (full featureList) + WebPage + Speakable (cssSelector) + FAQPage (8Q)
- hreflang en added, meta description with concrete numbers

**faq.html**
- Title: "25 Questions Answered"
- FAQPage JSON-LD expanded from 4 → 25 questions
- Speakable + BreadcrumbList schemas added
- `<time datetime="2026-04-27">` tag in hero

**install.html**
- Title: "How to Install Letterbot on Windows — 10 Minutes"
- HowTo JSON-LD with 5 steps, totalTime PT10M, estimatedCost $0
- BreadcrumbList + Speakable added

**features.html**
- ItemList JSON-LD for 5 feature categories
- BreadcrumbList + Speakable added

**how-it-works.html**
- Title: "The Complete Pipeline"
- HowTo JSON-LD for 7-stage pipeline
- BreadcrumbList + Speakable added

**compare.html**
- Title now includes competitor names: Superhuman/SaneBox/Zapier
- Meta description includes concrete prices ($30/mo, $7+/mo, $20+/mo)
- WebPage + BreadcrumbList + Speakable added

**blog/self-hosted-email-triage.html** — NEW
- Deep-guide article: "Self-Hosted Email Triage: What It Is, How It Works, and When You Need It"
- `<dfn>` definitions for "email triage" and "self-hosted email triage"
- 5-stage pipeline explanation, comparison table (self-hosted vs cloud)
- Letterbot technical specs with all 13 verifiable numbers
- FAQ section (5 questions)
- Article + FAQPage JSON-LD + Speakable + BreadcrumbList
- Added to sitemap at priority 0.85

**blog/why-letterbot-exists.html**
- Full Article JSON-LD with datePublished, dateModified, Speakable, BreadcrumbList

**assets/styles.css**
- Stats grid: 4-col → 6-col (responsive: 3 @ 900px, 2 @ 700px)
- `.definition-lead` — amber left-border block for quotable definitions
- `.definition-facts` — 2-col grid of fact-items
- `.fact-item` — card with amber heading for citable chunks

**sitemap.xml**
- All lastmod: 2026-03-25 → 2026-04-27
- New article added, priority order reviewed

**All pages**: author meta = "Letterbot project — master@letterbot.ru",
`last-modified` meta = 2026-04-27, footer date = "April 27, 2026"

## GEO principles applied (from citation optimization research)

1. **Chunking**: one paragraph = one idea, each `<p>` is independently citable
2. **First-sentence answer**: every FAQ answer starts with direct answer
3. **Speakable schema**: cssSelector on all pages pointing to citable elements
4. **Concrete numbers**: all stats verifiable (1,541 tests, 74K lines, 40–120 MB, etc.)
5. **`<dfn>` definitions**: "email triage", "self-hosted email triage", "deterministic triage"
6. **Full FAQPage JSON-LD**: 25 questions on faq.html, 8 on index.html, 5 on blog
7. **HowTo JSON-LD**: install.html (5 steps) and how-it-works.html (7 stages)
8. **BreadcrumbList**: all inner pages
9. **E-E-A-T**: named author email on all pages, `<time>` tags, datePublished/dateModified
10. **Fresh dates**: all pages show April 27, 2026

## Dev branch naming convention
Feature branches: `claude/<feature-name>-<id>`
