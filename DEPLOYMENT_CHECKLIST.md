# Deployment Checklist for Vercel & Hostinger

## Pre-Deployment Setup

### 1. Get Supabase Credentials ⚠️ CRITICAL
- [ ] Go to https://app.supabase.com
- [ ] Select project: `dxfnsbwqakhkevjxwgwo`
- [ ] Navigate to Settings → API
- [ ] Copy **Project URL**: `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- [ ] Copy **anon/public key** (starts with "eyJ...")
- [ ] Save these securely

### 2. Set Up Google OAuth
- [ ] Go to https://console.cloud.google.com
- [ ] Create new project or select existing
- [ ] Enable Google+ API
- [ ] Create OAuth 2.0 credentials
- [ ] Add authorized redirect URIs:
  - `https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback`
  - `http://localhost:3000` (for testing)
  - Your production URL (add after deployment)
- [ ] Copy Client ID and Client Secret

### 3. Configure Supabase
- [ ] In Supabase Dashboard → Authentication → Providers
- [ ] Enable Google provider
- [ ] Paste Google Client ID
- [ ] Paste Google Client Secret
- [ ] Add Site URL: Your production domain
- [ ] Add Redirect URLs: Your production domain + `/dashboard`
- [ ] Save configuration

### 4. Local Testing
- [ ] Update `.env` with real credentials
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test login at http://localhost:3000/login
- [ ] Verify redirect to dashboard works
- [ ] Test sign out
- [ ] Check browser console for errors

## Vercel Deployment

### 5. Prepare for Vercel
- [ ] Commit all changes to Git
- [ ] Push to GitHub/GitLab/Bitbucket
- [ ] Ensure `.env` is in `.gitignore`
- [ ] Verify `vercel.json` exists

### 6. Deploy to Vercel
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run `vercel login`
- [ ] Run `vercel` in project directory
- [ ] Follow prompts to link project
- [ ] Note your deployment URL

### 7. Configure Vercel Environment Variables
Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these variables:
- [ ] `VITE_SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- [ ] `VITE_SUPABASE_ANON_KEY` = Your anon key
- [ ] `SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- [ ] `SUPABASE_ANON_KEY` = Your anon key
- [ ] `DATABASE_URL` = `postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres`
- [ ] `FRONTEND_URL` = Your Vercel URL (e.g., `https://your-app.vercel.app`)

### 8. Update OAuth Redirect URIs
- [ ] Go to Google Cloud Console → Credentials
- [ ] Edit your OAuth 2.0 Client ID
- [ ] Add authorized redirect URI: Your Vercel URL
- [ ] Go to Supabase → Authentication → URL Configuration
- [ ] Add Site URL: Your Vercel URL
- [ ] Add Redirect URL: `https://your-app.vercel.app/#/dashboard`
- [ ] Save all changes

### 9. Redeploy Vercel
- [ ] Run `vercel --prod` to deploy with env vars
- [ ] Wait for deployment to complete
- [ ] Visit your production URL

### 10. Test Production (Vercel)
- [ ] Visit your Vercel URL
- [ ] Click Login
- [ ] Test Google OAuth
- [ ] Verify redirect to dashboard
- [ ] Check user profile displays
- [ ] Test sign out
- [ ] Test on mobile device

## Hostinger Deployment

### 11. Prepare for Hostinger
- [ ] Run `npm run build` locally
- [ ] Verify `dist` folder is created
- [ ] Check `dist` folder contains all files
- [ ] Prepare `server.js` for upload

### 12. Upload to Hostinger
- [ ] Access Hostinger File Manager or FTP
- [ ] Create a new directory (e.g., `samprabha`)
- [ ] Upload entire `dist` folder contents
- [ ] Upload `server.js`
- [ ] Upload `package.json`
- [ ] Upload `package-lock.json`

### 13. Configure Node.js on Hostinger
- [ ] Go to Hostinger Control Panel
- [ ] Find "Node.js" or "Application" section
- [ ] Create new Node.js application
- [ ] Set Node.js version to 18 or higher
- [ ] Set application root to your upload directory
- [ ] Set entry point to `server.js`
- [ ] Set port (usually 3000 or auto-assigned)

### 14. Set Environment Variables (Hostinger)
In Hostinger Node.js app settings, add:
- [ ] `VITE_SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- [ ] `VITE_SUPABASE_ANON_KEY` = Your anon key
- [ ] `SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- [ ] `SUPABASE_ANON_KEY` = Your anon key
- [ ] `DATABASE_URL` = Your database URL
- [ ] `FRONTEND_URL` = Your Hostinger domain
- [ ] `PORT` = Assigned port number

### 15. Install Dependencies (Hostinger)
- [ ] Access SSH or terminal in Hostinger
- [ ] Navigate to your app directory
- [ ] Run `npm install --production`
- [ ] Wait for installation to complete

### 16. Start Application (Hostinger)
- [ ] In Hostinger panel, click "Start Application"
- [ ] Or via SSH: `npm run server`
- [ ] Check application status
- [ ] View logs for any errors

### 17. Update OAuth for Hostinger
- [ ] Go to Google Cloud Console → Credentials
- [ ] Add your Hostinger domain to redirect URIs
- [ ] Go to Supabase → Authentication
- [ ] Add Hostinger domain to Site URL
- [ ] Add redirect URL: `https://your-domain.com/#/dashboard`

### 18. Test Production (Hostinger)
- [ ] Visit your Hostinger domain
- [ ] Test all navigation links
- [ ] Click Login
- [ ] Test Google OAuth
- [ ] Verify dashboard access
- [ ] Test sign out
- [ ] Check on mobile

## Post-Deployment

### 19. Final Checks
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Login/Register functional
- [ ] Dashboard shows user info
- [ ] Sign out works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active (HTTPS)

### 20. Monitoring
- [ ] Set up error tracking (optional)
- [ ] Monitor Supabase usage
- [ ] Check server logs regularly
- [ ] Test authentication weekly
- [ ] Keep dependencies updated

## Troubleshooting

### If Login Doesn't Work:
1. Check browser console for errors
2. Verify environment variables are set
3. Confirm Google OAuth redirect URIs
4. Check Supabase provider is enabled
5. Verify anon key is correct
6. Clear browser cache and cookies

### If Dashboard Shows 404:
1. Check HashRouter is used (not BrowserRouter)
2. Verify route exists in App.tsx
3. Check build output includes all files
4. Verify server routing configuration

### If Images Don't Load:
1. Check image paths (should be `/images/...` not `/public/images/...`)
2. Verify images are in `public` folder
3. Check build includes public assets
4. Verify MIME types on server

## Security Reminders

- [ ] Never commit `.env` file
- [ ] Use HTTPS in production
- [ ] Rotate keys regularly
- [ ] Enable Supabase RLS
- [ ] Monitor authentication logs
- [ ] Keep dependencies updated
- [ ] Use strong passwords for database

## Success Criteria

✅ Users can sign in with Google
✅ Users are redirected to dashboard
✅ User profile displays correctly
✅ Sign out works properly
✅ Sessions persist across page reloads
✅ All pages are accessible
✅ Mobile experience is smooth
✅ No security warnings
✅ HTTPS is active
✅ Performance is good

## Need Help?

- Supabase Support: https://supabase.com/docs
- Vercel Support: https://vercel.com/support
- Hostinger Support: https://www.hostinger.com/tutorials
- Google OAuth: https://developers.google.com/identity

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Production URL:** _____________
**Notes:** _____________
