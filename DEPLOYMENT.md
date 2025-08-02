# Netlify Deployment Guide

This project is now configured for Netlify deployment. Here's what has been set up:

## Configuration Files Added

1. **`netlify.toml`** - Netlify build configuration
2. **`.nvmrc`** - Node.js version specification
3. **Updated `next.config.mjs`** - Optimized for static export

## Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Node Version**: 18
- **NPM Version**: 9

## Deployment Steps

1. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"

2. **Select Repository**:
   - Choose your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

## Local Testing

To test the build locally:
```bash
npm run build
npm run start
```

## Features

- ✅ Static export for optimal performance
- ✅ Automatic redirects for SPA routing
- ✅ Optimized images (unoptimized for static export)
- ✅ Tailwind CSS support
- ✅ Next.js 15 compatibility

## Environment Variables

If you need to add environment variables:
1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add any required variables

## Custom Domain

To add a custom domain:
1. Go to your Netlify dashboard
2. Navigate to Site settings > Domain management
3. Add your custom domain

## Build Optimization

The project is configured for:
- Static site generation
- Optimized bundle sizes
- Fast loading times
- SEO-friendly URLs with trailing slashes