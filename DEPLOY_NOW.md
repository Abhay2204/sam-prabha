# Deploy to Production - Simple Steps

## Your code is ready. Just deploy it:

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for production"
git push
```

### Step 2: Deploy on Vercel

Go to: https://vercel.com/new

1. Click "Import Git Repository"
2. Select your GitHub repo
3. Add these environment variables:
   - `VITE_SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = [your key from .env file]
   - `SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
   - `SUPABASE_ANON_KEY` = [your key from .env file]
4. Click "Deploy"

Vercel will give you a URL like: `https://samprabha.vercel.app`

### Step 3: Update Supabase with Your Production URL

Go to: https://app.supabase.com/project/dxfnsbwqakhkevjxwgwo/auth/url-configuration

**Site URL:**
```
https://your-vercel-url.vercel.app
```

**Redirect URLs (click Add URL):**
```
https://your-vercel-url.vercel.app
https://your-vercel-url.vercel.app/
https://your-vercel-url.vercel.app/dashboard
```

### Step 4: Update Google OAuth

Go to: https://console.cloud.google.com/apis/credentials

Add your Vercel URL to authorized redirect URIs:
```
https://your-vercel-url.vercel.app
```

## Done!

Your app will be live at: `https://your-vercel-url.vercel.app`

The code automatically uses the correct URL (localhost for testing, Vercel URL for production).
