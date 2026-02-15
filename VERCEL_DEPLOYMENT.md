# 🚀 Vercel Deployment Guide - Complete Setup

## Overview

Your app is now configured for Vercel with serverless API routes. The backend runs as serverless functions instead of a traditional Express server.

## 📁 Project Structure for Vercel

```
sam-prabha/
├── api/                        ← Serverless API routes
│   ├── health.js              ← Health check endpoint
│   └── auth/
│       ├── user.js            ← Get user endpoint
│       ├── signout.js         ← Sign out endpoint
│       └── verify.js          ← Verify token endpoint
├── dist/                       ← Built frontend (auto-generated)
├── pages/                      ← React pages
├── contexts/                   ← Auth context
├── lib/                        ← Supabase client
├── vercel.json                 ← Vercel configuration
└── package.json
```

## 🔧 Step-by-Step Deployment

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email).

### Step 3: Link Your Project (First Time Only)

```bash
vercel
```

You'll be asked:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time) or Yes (if exists)
- **Project name?** → samprabha-scientific-services (or your choice)
- **Directory?** → ./ (current directory)
- **Override settings?** → No

This creates a preview deployment.

### Step 4: Add Environment Variables

Go to your Vercel dashboard: https://vercel.com/dashboard

1. Select your project
2. Go to **Settings** → **Environment Variables**
3. Add these variables for **Production**, **Preview**, and **Development**:

```
VITE_SUPABASE_URL
Value: https://dxfnsbwqakhkevjxwgwo.supabase.co

VITE_SUPABASE_ANON_KEY
Value: [Your Supabase anon key from dashboard]

SUPABASE_URL
Value: https://dxfnsbwqakhkevjxwgwo.supabase.co

SUPABASE_ANON_KEY
Value: [Your Supabase anon key - same as above]

DATABASE_URL
Value: postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres
```

**Important:** Make sure to select all three environments (Production, Preview, Development) for each variable.

### Step 5: Deploy to Production

```bash
vercel --prod
```

This will:
1. Build your frontend
2. Deploy serverless API functions
3. Give you a production URL (e.g., `https://samprabha-scientific-services.vercel.app`)

### Step 6: Update Google OAuth Redirect URIs

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to **APIs & Services** → **Credentials**
3. Edit your OAuth 2.0 Client ID
4. Add authorized redirect URIs:
   ```
   https://your-app.vercel.app
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   ```
5. Save changes

### Step 7: Update Supabase Configuration

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Add **Site URL**: `https://your-app.vercel.app`
5. Add **Redirect URLs**:
   ```
   https://your-app.vercel.app/#/dashboard
   https://your-app.vercel.app
   ```
6. Save configuration

### Step 8: Test Your Deployment

1. Visit your Vercel URL
2. Click **Login** in the navbar
3. Click **Continue with Google**
4. Complete OAuth flow
5. Verify you're redirected to dashboard
6. Check that user info displays correctly
7. Test sign out

## 🔍 Verify API Routes Work

Test your serverless functions:

```bash
# Health check
curl https://your-app.vercel.app/api/health

# Should return: {"status":"ok","message":"Server is running","timestamp":"..."}
```

## 📊 Vercel Dashboard Features

### Deployments
- View all deployments (production & preview)
- Rollback to previous versions
- View deployment logs

### Analytics
- Monitor page views
- Track performance
- View visitor data

### Logs
- Real-time function logs
- Error tracking
- Debug issues

### Domains
- Add custom domain
- Configure DNS
- SSL certificates (automatic)

## 🔄 Continuous Deployment (Recommended)

### Connect to GitHub

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add authentication system"
   git push origin main
   ```

2. In Vercel Dashboard:
   - Go to your project settings
   - Click **Git** → **Connect Git Repository**
   - Select your GitHub repository
   - Authorize Vercel

3. Now every push to `main` branch auto-deploys to production!

### Branch Previews

- Push to any branch → Automatic preview deployment
- Each PR gets its own preview URL
- Test changes before merging

## 🛠️ Local Development with Vercel

### Install Vercel CLI globally
```bash
npm i -g vercel
```

### Run locally with Vercel environment
```bash
vercel dev
```

This runs your app with:
- Serverless functions locally
- Environment variables from Vercel
- Same behavior as production

## 📝 Environment Variables Management

### View current variables
```bash
vercel env ls
```

### Add a variable
```bash
vercel env add VARIABLE_NAME
```

### Pull variables to local
```bash
vercel env pull .env.local
```

## 🔐 Security Best Practices

1. **Never commit `.env` files**
   - Already in `.gitignore`
   - Use Vercel dashboard for secrets

2. **Use environment-specific variables**
   - Different keys for dev/preview/production
   - Rotate keys regularly

3. **Enable Vercel Authentication** (optional)
   - Protect preview deployments
   - Settings → Deployment Protection

4. **Monitor logs**
   - Check for suspicious activity
   - Set up error alerts

## 🚨 Troubleshooting

### Issue: "SUPABASE_ANON_KEY is not set"

**Solution:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify `SUPABASE_ANON_KEY` is set for all environments
3. Redeploy: `vercel --prod`

### Issue: API routes return 404

**Solution:**
1. Check `vercel.json` exists in root
2. Verify `api/` folder structure
3. Check function names match routes
4. Redeploy

### Issue: Google OAuth redirect error

**Solution:**
1. Add Vercel URL to Google Cloud Console redirect URIs
2. Add to Supabase redirect URLs
3. Clear browser cache
4. Try again

### Issue: Build fails

**Solution:**
1. Check build logs in Vercel dashboard
2. Verify all dependencies in `package.json`
3. Test build locally: `npm run build`
4. Check Node.js version (should be 18+)

### Issue: Environment variables not working

**Solution:**
1. Variables must be set in Vercel dashboard
2. Must redeploy after adding variables
3. Frontend variables must start with `VITE_`
4. Check spelling and case sensitivity

## 📱 Custom Domain Setup

### Add Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click **Add Domain**
3. Enter your domain (e.g., `samprabha.com`)
4. Follow DNS configuration instructions

### DNS Configuration

Add these records to your domain provider:

**For root domain (samprabha.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Update OAuth URLs

After adding custom domain:
1. Update Google OAuth redirect URIs
2. Update Supabase Site URL and Redirect URLs
3. Test authentication with new domain

## 🎯 Deployment Checklist

Before deploying:
- [ ] All environment variables added to Vercel
- [ ] Google OAuth credentials configured
- [ ] Supabase Google provider enabled
- [ ] Code committed to Git
- [ ] Build succeeds locally (`npm run build`)
- [ ] `.env` not committed

After deploying:
- [ ] Test health endpoint: `/api/health`
- [ ] Test login flow
- [ ] Test dashboard access
- [ ] Test sign out
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate (HTTPS)
- [ ] Test on different browsers

## 🔄 Update Deployment

### Quick update
```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Or deploy directly
vercel --prod
```

### Rollback deployment
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click **⋯** → **Promote to Production**

## 📊 Monitoring

### View Logs
```bash
vercel logs [deployment-url]
```

### Real-time logs
```bash
vercel logs --follow
```

### Function logs
- Go to Vercel Dashboard → Functions
- Click on any function to see logs
- Filter by time, status, etc.

## 💡 Pro Tips

1. **Use Preview Deployments**
   - Test changes before production
   - Share preview URLs with team
   - Each branch gets unique URL

2. **Enable Analytics**
   - Track user behavior
   - Monitor performance
   - Identify issues early

3. **Set up Notifications**
   - Get alerts for failed deployments
   - Monitor uptime
   - Track errors

4. **Use Vercel CLI**
   - Faster deployments
   - Better control
   - Local testing

## 🎉 Success!

Your app is now deployed on Vercel with:
- ✅ Serverless API routes
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic scaling
- ✅ Zero configuration
- ✅ Continuous deployment

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

---

**Your Production URL:** https://your-app.vercel.app
**API Health Check:** https://your-app.vercel.app/api/health
**Dashboard:** https://vercel.com/dashboard
