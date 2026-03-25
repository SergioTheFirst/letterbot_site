# Letterbot marketing site

Static marketing site for Letterbot.

## Production URL
https://sergiothefirst.github.io/letterbot_site/

## What changed in this rebuild
- stronger homepage positioning around **self-hosted email triage**
- clearer **download → configure → run** install path
- real **cockpit screenshots** added as proof
- refreshed metadata, Open Graph, Twitter cards, robots.txt, sitemap.xml
- SoftwareApplication structured data on the homepage
- FAQ structured data kept on the FAQ page
- favicon, app icons and updated web manifest added

## Deploy
```bash
git add .
git commit -m "rebuild marketing site"
git push
```

## If you switch to a custom domain
Update these files:
- `assets/config.js`
- `robots.txt`
- `sitemap.xml`
- canonical / og:url values in HTML pages
