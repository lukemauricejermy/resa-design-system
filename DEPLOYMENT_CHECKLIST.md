# 🚀 Storybook Deployment Checklist

## Before First Deployment

- [ ] **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
- [ ] **Vercel CLI**: Install with `npm i -g vercel`
- [ ] **GitHub**: Push your project to GitHub
- [ ] **Test Build**: Run `npm run build:storybook` locally

## Quick Deploy Commands

```bash
# Build Storybook locally
npm run build:storybook

# Deploy to Vercel (first time)
vercel

# Deploy to production
npm run deploy:storybook
```

## Vercel Dashboard Deployment

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure:
   - **Framework**: Other
   - **Build Command**: `npm run build:storybook`
   - **Output Directory**: `packages/storybook/storybook-static`
4. Deploy!

## After Deployment

- [ ] **Test Live Site**: Visit your Vercel URL
- [ ] **Share URL**: Send to your team
- [ ] **Set Auto-Deploy**: Vercel auto-deploys on push
- [ ] **Custom Domain**: Optional branding setup

## Troubleshooting

- **Build Fails**: Check Vercel build logs
- **Missing Assets**: Verify `vercel.json` configuration
- **Routing Issues**: Ensure SPA routing is configured

## Files Created

- `vercel.json` - Vercel configuration
- `.gitignore` - Excludes build outputs
- `DEPLOYMENT.md` - Detailed deployment guide
- `DEPLOYMENT_CHECKLIST.md` - This quick reference

## Next Steps

1. Deploy to Vercel
2. Share live URL with team
3. Continue building components
4. Set up automatic deployments
