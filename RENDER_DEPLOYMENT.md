# Render Deployment Guide

This portfolio project is configured for deployment on [Render](https://render.com/).

## Prerequisites

- Render account (free or paid)
- GitHub repository connected to your Render account
- Environment secrets configured in Render dashboard

## Environment Variables

The following environment variables need to be set in Render:

- **GEMINI_API_KEY**: Your Google Gemini API key (required for AI features)
- **APP_URL**: The URL of your deployed application (optional, auto-injected)
- **NODE_ENV**: Set to `production` (auto-set by Render)
- **PORT**: Server port (optional, defaults to 3000)

## Deployment Steps

1. **Connect GitHub Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select the branch (main)

2. **Configure Service**
   - **Name**: `naninaik-portfolio` (or your preferred name)
   - **Environment**: Node
   - **Plan**: Choose your plan (Free, Starter, etc.)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Select appropriate type

3. **Add Environment Variables**
   - Go to Environment section
   - Add `GEMINI_API_KEY` with your actual API key
   - Add any other required variables from `.env.example`

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your application
   - Monitor the build logs in the dashboard

## Build Process

The deployment process:
1. Installs dependencies via `npm install`
2. Builds the Vite React app via `npm run build`
3. Starts the Express server via `npm start`
4. Server serves the built static files and handles API routes

## Project Structure

```
├── src/                  # React source files
├── public/               # Static assets
├── dist/                 # Built Vite application (generated)
├── server.ts             # Express server
├── render.yaml           # Render deployment config
├── .env.example          # Environment variables template
└── .renderignore         # Files to ignore during deployment
```

## Features

- ✅ React 19 + Vite frontend
- ✅ Express server for static file serving
- ✅ Google Gemini AI integration
- ✅ Responsive design with Tailwind CSS
- ✅ Project portfolio showcase
- ✅ Contact form with AI capabilities

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify TypeScript compilation: `npm run lint`
- Check the build logs in Render dashboard

### Server Won't Start
- Ensure `server.ts` is correctly configured
- Check that port is not hardcoded (should use `process.env.PORT`)
- Verify dependencies in `package.json`

### Environment Variables Not Working
- Ensure variables are set in Render dashboard
- Check `.env.example` for required variables
- Restart the service after changing variables

## Local Development

To test the build locally:
```bash
npm install
npm run build
npm start
```

Then visit `http://localhost:3000`

## Performance Tips

- Use Render's caching for faster builds
- Optimize images in the `public/assets` folder
- Enable gzip compression (done by Express)
- Consider upgrading to a paid plan for better performance

## Support

For Render-specific issues, visit [Render Documentation](https://render.com/docs)
For project issues, check the main README.md
