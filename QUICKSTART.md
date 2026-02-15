# Quick Start Guide

## Get Your Supabase Anon Key (IMPORTANT!)

Before running the app, you MUST get your Supabase anon key:

1. Go to https://app.supabase.com
2. Select your project (dxfnsbwqakhkevjxwgwo)
3. Click **Settings** (gear icon) → **API**
4. Copy the **anon/public** key (it's a long string starting with "eyJ...")

## Setup in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Edit the `.env` file and replace `your_supabase_anon_key_here` with your actual key:

```env
VITE_SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  # Your actual key here

SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  # Same key here

DATABASE_URL=postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### 3. Enable Google OAuth in Supabase

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable **Google**
3. Add these redirect URLs:
   ```
   http://localhost:3000
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   ```
4. Get Google OAuth credentials from [Google Cloud Console](https://console.cloud.google.com)
5. Add Client ID and Client Secret to Supabase

## Run the App

```bash
npm run dev
```

Visit: http://localhost:3000

## Test Authentication

1. Click **Login** in the navbar
2. Click **Continue with Google**
3. Sign in with your Google account
4. You'll be redirected to the Dashboard

## What's Included

✅ Login page (`/login`)
✅ Register page (`/register`)
✅ Dashboard page (`/dashboard`) - Shows after successful login
✅ Google OAuth authentication
✅ Session management
✅ Protected routes
✅ User profile display

## File Structure

```
├── contexts/
│   └── AuthContext.tsx          # Authentication context
├── lib/
│   ├── supabaseClient.ts        # Supabase client setup
│   └── database.types.ts        # TypeScript types
├── pages/
│   ├── Login.tsx                # Login page
│   ├── Register.tsx             # Register page
│   └── Dashboard.tsx            # Protected dashboard
├── server.js                    # Backend API (optional)
├── .env                         # Environment variables
└── vercel.json                  # Vercel deployment config
```

## Next Steps

- Read `SETUP_AUTH.md` for detailed setup instructions
- Read `deploy.md` for deployment guide
- Customize the Dashboard page
- Add more protected routes
- Set up database tables for your app

## Troubleshooting

**"SUPABASE_ANON_KEY is not set"**
- Make sure you added the key to `.env`
- Restart the dev server after editing `.env`

**Google OAuth not working**
- Enable Google provider in Supabase
- Add redirect URLs in Google Cloud Console
- Check that credentials are correct

**Can't access Dashboard**
- Make sure you're logged in
- Check browser console for errors
- Verify Supabase session is active

## Need Help?

Check the detailed guides:
- `SETUP_AUTH.md` - Complete authentication setup
- `deploy.md` - Deployment instructions
- Supabase Docs: https://supabase.com/docs
