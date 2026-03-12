# LetterBot GitHub Pages Website (docs/)

This repository includes a premium static site in `/docs` designed for GitHub Pages.

## 1) Add the site files

Place all website files under:

docs/
  index.html
  features.html
  install.html
  faq.html
  privacy.html
  support.html
  robots.txt
  sitemap.xml
  .nojekyll
  assets/

## 2) Copy the Boosty QR (required)

The repo already contains the QR SVG at:

mailbot_v26/boostydon.svg

Copy it into the site folder so GitHub Pages can serve it:

### Windows (PowerShell)
Copy-Item -Force .\mailbot_v26\boostydon.svg .\docs\assets\img\boostydon.svg

### macOS / Linux
cp -f mailbot_v26/boostydon.svg docs/assets/img/boostydon.svg

## 3) Enable GitHub Pages from /docs

Settings → Pages → Build and deployment:

- Source: Deploy from a branch
- Branch: main
- Folder: /docs

GitHub Pages supports publishing from the /docs folder on the source branch.

## 4) Optional: custom domain

Settings → Pages → Custom domain: set your domain, save.
After setting it in GitHub, configure DNS at your provider.

Tip: verify your custom domain before adding it to GitHub Pages, and add the custom domain in GitHub before configuring DNS to reduce takeover risk.

### Apex domain (example.com)

Create A records for @:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Optional AAAA records (IPv6) for @:

2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153

### www subdomain

Create CNAME:

www -> <your-user>.github.io

Do NOT use wildcard DNS records (*.example.com).

## 5) Update canonicals and sitemap

If you use a custom domain, update these files:

- docs/index.html (canonical + og:url + og:image URLs)
- docs/*.html canonicals
- docs/robots.txt sitemap URL
- docs/sitemap.xml <loc> URLs
