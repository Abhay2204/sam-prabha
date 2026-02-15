# Deployment Guide

## Quick Deployment Checklist

### Before Deploying

- [ ] Get Supabase anon key from dashboard
- [ ] Set up Google OAuth credentials
- [ ] Configure environment variables
- [ ] Test authentication locally
- [ ] Build project successfully

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard**
   - Go to project settings
   - Add all variables from `.env.example`
   - Update `FRONTEND_URL` to your Vercel URL

5. **Update Google OAuth Redirect URIs**
   - Add your Vercel URL to Google Cloud Console
   - Add Supabase callback URL

### Hostinger Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload `dist` folder contents
   - Upload `server.js`
   - Upload `package.json`

3. **Configure Node.js App**
   - Set Node.js version to 18+
   - Set entry point to `server.js`
   - Add environment variables

4. **Install Dependencies on Server**
   ```bash
   npm install --production
   ```

5. **Start the Application**
   ```bash
   npm run server
   ```

### Post-Deployment

- [ ] Test login functionality
- [ ] Test Google OAuth flow
- [ ] Verify dashboard access
- [ ] Check all routes work
- [ ] Test on mobile devices

### Environment Variables Required

```
VITE_SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
VITE_SUPABASE_ANON_KEY=your_key
SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
SUPABASE_ANON_KEY=your_key
DATABASE_URL=postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres
FRONTEND_URL=https://your-domain.com
```

### Troubleshooting

**Build fails:**
- Check Node.js version (18+)
- Run `npm install` again
- Clear `node_modules` and reinstall

**Auth not working:**
- Verify environment variables
- Check Google OAuth redirect URIs
- Ensure Supabase provider is enabled

**404 errors:**
- Check `vercel.json` routing
- Verify build output in `dist` folder
- Check HashRouter configuration
