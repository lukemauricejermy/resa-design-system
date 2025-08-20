# Deploying Storybook to Vercel

This guide explains how to deploy your Resa Design System Storybook to Vercel for public viewing.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install globally with `npm i -g vercel`
3. **GitHub Repository**: Your project should be pushed to GitHub

## Quick Deployment

### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**: Ensure your latest changes are committed and pushed
2. **Import Project**: Go to [vercel.com/new](https://vercel.com/new)
3. **Connect Repository**: Select your GitHub repository
4. **Configure Build**:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build:storybook`
   - **Output Directory**: `packages/storybook/storybook-static`
   - **Install Command**: `npm install`
5. **Deploy**: Click "Deploy"

### Option 2: Vercel CLI

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy**:
   ```bash
   npm run build:storybook
   vercel --prod
   ```

## Configuration Details

The project includes a `vercel.json` file that automatically configures:
- Build command and output directory
- SPA routing (all routes redirect to index.html)
- Cache headers for optimal performance

## Build Process

When you deploy:

1. **Install Dependencies**: Vercel runs `npm install`
2. **Build Storybook**: Runs `npm run build:storybook`
3. **Output**: Generates static files in `packages/storybook/storybook-static/`
4. **Deploy**: Serves the static files from Vercel's CDN

## Updating the Live Site

To update the live Storybook:

1. **Update Tokens**: Run `npm run update:tokens`
2. **Commit Changes**: `git add . && git commit -m "Update design tokens"`
3. **Push to GitHub**: `git push origin main`
4. **Auto-Deploy**: Vercel automatically rebuilds and deploys

## Custom Domain (Optional)

1. **Add Domain**: In Vercel dashboard, go to your project → Settings → Domains
2. **Configure DNS**: Add the CNAME record provided by Vercel
3. **SSL**: Vercel automatically provides HTTPS

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build:storybook` works locally
- Check Vercel build logs for specific errors

### Missing Assets
- Verify `vercel.json` output directory is correct
- Check that Storybook build completes successfully
- Ensure all assets are referenced with relative paths

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes should redirect to `index.html`

## Performance

- **CDN**: Vercel serves files from global edge locations
- **Caching**: Static assets are cached for optimal performance
- **Build Time**: Typically 1-3 minutes for Storybook builds

## Cost

- **Hobby Plan**: Free for personal projects
- **Pro Plan**: $20/month for team features
- **Enterprise**: Custom pricing for large organizations

## Next Steps

After successful deployment:
1. Share the live URL with your team
2. Set up automatic deployments on every push
3. Consider adding custom domain for branding
4. Monitor performance and build times
