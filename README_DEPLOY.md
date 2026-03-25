# Letterbot site — deployment notes

## What this package is
Rebuilt static site for Letterbot with:
- stronger homepage positioning
- local cockpit screenshots
- updated robots.txt and sitemap.xml
- SoftwareApplication schema on the homepage
- refreshed Open Graph, Twitter card and favicon assets

## Default publish target
https://sergiothefirst.github.io/letterbot_site/

## Deploy on GitHub Pages
1. Push repository contents to the `main` branch.
2. In GitHub Pages, publish from `main` / root.
3. Wait for Pages to redeploy.

## Add analytics
For Cloudflare Web Analytics, paste the beacon script before `</body>` on every public HTML page or inject it at the edge if you later proxy the site through Cloudflare.

## If you later move to letterbot.ru
Update:
- `assets/config.js`
- `robots.txt`
- `sitemap.xml`
- canonical / og:url values across HTML files
