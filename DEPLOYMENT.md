# Deployment Guide - Portfolio 2025

## Netlify Deployment

### Prerequisites
- A Netlify account (free tier works fine)
- GitHub repository connected to Netlify

### Step 1: Connect Repository to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub)
4. Select your repository: `paramvsi/my-portfolio-2025`
5. Netlify will auto-detect Next.js settings

### Step 2: Configure Build Settings

Netlify should auto-detect these, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 20

These are also defined in `netlify.toml`.

### Step 3: Set Environment Variables

Go to **Site settings** → **Environment variables** and add:

```bash
# REQUIRED - Update with your production domain
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app

# Optional (if not hardcoded)
NEXT_PUBLIC_SITE_NAME=Paramveer Singh
NEXT_PUBLIC_SITE_DESCRIPTION=Senior Frontend Engineer specializing in real-time data systems
NEXT_PUBLIC_EMAIL=paramsinghkhattra@gmail.com
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/paramveer-singh-3623a9183/
NEXT_PUBLIC_GITHUB=https://github.com/paramvsi
NEXT_PUBLIC_LOCATION=Dubai, UAE
```

### Step 4: Deploy

1. Click "Deploy site"
2. Netlify will build and deploy your site
3. You'll get a URL like: `https://your-site-name.netlify.app`

### Step 5: Custom Domain (Optional)

1. Go to **Domain settings**
2. Add custom domain (e.g., `paramveer.dev`)
3. Follow Netlify's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

---

## Vercel Deployment (Alternative)

### Step 1: Connect to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js

### Step 2: Configure Environment Variables

Add in Vercel dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Step 3: Deploy

Click "Deploy" - Vercel handles everything automatically.

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

---

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | ✅ Yes | Production site URL | `https://yoursite.com` |
| `NEXT_PUBLIC_SITE_NAME` | ⚠️ Optional | Site name for SEO | `Paramveer Singh` |
| `NEXT_PUBLIC_EMAIL` | ⚠️ Optional | Contact email | `your@email.com` |
| `NEXT_PUBLIC_LINKEDIN` | ⚠️ Optional | LinkedIn profile URL | `https://linkedin.com/in/...` |
| `NEXT_PUBLIC_GITHUB` | ⚠️ Optional | GitHub profile URL | `https://github.com/...` |

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put secrets in these variables.

---

## Troubleshooting

### Build Fails on Netlify

1. Check Node version is set to 20
2. Verify `package.json` dependencies are correct
3. Check build logs for TypeScript errors

### Environment Variables Not Working

1. Make sure variables start with `NEXT_PUBLIC_`
2. Rebuild site after adding env vars
3. Clear Netlify cache: **Deploys** → **Deploy settings** → **Clear cache**

### Site URL Issues

1. Update `NEXT_PUBLIC_SITE_URL` to match your production domain
2. Don't use `localhost` in production
3. Redeploy after changing the URL

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible (/about, /contact, /work)
- [ ] Project detail pages work (/work/[slug])
- [ ] Links open in new tabs
- [ ] Resume PDF downloads correctly
- [ ] Contact links work (email, LinkedIn, GitHub)
- [ ] SEO meta tags are correct
- [ ] Lighthouse scores are good (90+)
- [ ] Mobile responsive
- [ ] Animations work smoothly

---

## Project Links Added

✅ **Touchnote E-commerce:** https://touchnote.com/us/
✅ **KingCaller AI:** https://www.kingcaller.ai/
✅ **MicroCollab:** https://microcollax.netlify.app/
✅ **CodePulse:** https://codepulse2212.netlify.app/

Projects without public links will show **"Link not available"** or no link button.

---

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Netlify Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs)
- [Vercel Next.js Docs](https://vercel.com/docs/frameworks/nextjs)
