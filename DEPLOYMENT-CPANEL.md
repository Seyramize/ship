# Deploying Your Next.js Project to cPanel

## 1. Static Export (Recommended)
Most cPanel hosting only supports static sites. Next.js can export your site as static files if you do not use SSR or API routes.

### Steps:
1. Build and export your project:
   ```powershell
   pnpm build
   pnpm export
   ```
   This creates an `out` directory with static files.

2. Zip the contents of the `out` directory.
3. Upload the zipped files to your cPanel `public_html` folder (or a subdomain folder) and extract them.
4. Your site is now live as a static site.

---

## 2. Node.js App (If Supported by Your cPanel)
If your cPanel supports Node.js apps, you can deploy the full Next.js app (including SSR):

1. Upload your entire project to a folder (not just `public_html`).
2. Use cPanel's "Setup Node.js App" feature:
   - Set the application root to your project folder.
   - Set the startup file to `server.js` (you may need to create a custom server).
   - Install dependencies: `pnpm install`
   - Set environment variables as needed.
   - Start the app from cPanel.

---

## Notes
- Static export will not work for SSR or API routes.
- For static export, dynamic features must use client-side JS or external APIs.
- If you need a custom server for SSR, see Next.js documentation for [custom server setup](https://nextjs.org/docs/advanced-features/custom-server).

---

**For most users, static export is the easiest and most compatible way to deploy to cPanel.**
