# Vercel Deployment Guide

This project is configured for deployment on Vercel.

## Quick Deploy

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Manual Setup via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

## Configuration

The project uses the following Vercel configuration:

- **Framework**: Vite
- **Build Command**: `pnpm vite build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

## Environment Variables

If you need to set environment variables:

1. Go to your project settings in Vercel dashboard
2. Navigate to "Environment Variables"
3. Add any required variables

## Important Notes

- The Express server is not needed for Vercel deployment as Vercel handles static file serving natively
- Client-side routing is handled via the `rewrites` configuration in `vercel.json`
- All routes will be served by `index.html` to support React Router/Wouter routing

## Node.js Version

Make sure your project uses Node.js 20.19+ or 22.12+ (required by Vite 7.x). Vercel will automatically use the version specified in your `package.json` or `.nvmrc` file.

