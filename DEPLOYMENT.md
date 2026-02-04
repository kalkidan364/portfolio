# Vercel Deployment Guide

## Prerequisites
- A [Vercel account](https://vercel.com/signup) (free tier available)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import your project to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the Vite framework

3. **Configure build settings** (should be auto-detected):
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Root Directory: `portfolio-homepage`

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from the project directory**:
   ```bash
   cd portfolio-homepage
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (for first deployment)
   - Project name: Accept default or customize
   - Directory: `./` (current directory)
   - Override settings: `N` (vercel.json will be used)

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Configuration Files Created

- **`vercel.json`**: Vercel configuration with build settings and SPA routing
- **`.vercelignore`**: Files to exclude from deployment

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If needed)
1. Go to project settings in Vercel
2. Navigate to "Environment Variables"
3. Add any required variables
4. Redeploy for changes to take effect

### Automatic Deployments
- Every push to your main branch will trigger a production deployment
- Pull requests will create preview deployments automatically

## Troubleshooting

### Build Fails
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check Vercel build logs for specific errors

### 404 Errors on Routes
- The `vercel.json` rewrites configuration handles SPA routing
- All routes redirect to `index.html` for client-side routing

### Large Bundle Size
- Consider code splitting
- Optimize images (use WebP format)
- Review and remove unused dependencies

## Useful Commands

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]
```

## Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
