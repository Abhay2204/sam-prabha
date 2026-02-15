# Authentication Setup Guide

This guide will help you set up Google OAuth authentication with Supabase for both local development and production deployment (Vercel/Hostinger).

## Prerequisites

- Node.js installed (v18 or higher)
- A Supabase account
- A Google Cloud Console account

## Step 1: Supabase Setup

### 1.1 Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: `dxfnsbwqakhkevjxwgwo`
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL**: `https://dxfnsbwqakhkevjxwgwo.supabase.co`
   - **anon/public key**: This is your `SUPABASE_ANON_KEY`

### 1.2 Configure Google OAuth in Supabase

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Find **Google** and enable it
3. You'll need to add Google OAuth credentials (we'll get these in Step 2)

## Step 2: Google Cloud Console Setup

### 2.1 Create OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure the OAuth consent screen if prompted
6. Select **Web application** as the application type
7. Add authorized redirect URIs:
   ```
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   http://localhost:3000 (for local development)
   ```
8. Copy the **Client ID** and **Client Secret**

### 2.2 Add Google Credentials to Supabase

1. Go back to Supabase Dashboard → **Authentication** → **Providers** → **Google**
2. Paste your **Client ID** and **Client Secret**
3. Save the configuration

## Step 3: Environment Variables Setup

### 3.1 Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Update `.env` with your credentials:
   ```env
   # Frontend (Vite)
   VITE_SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here

   # Backend (Node.js)
   SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
   SUPABASE_ANON_KEY=your_actual_anon_key_here
   DATABASE_URL=postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres

   # Server
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

### 3.2 Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   ```
   VITE_SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
   SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
   SUPABASE_ANON_KEY=your_actual_anon_key_here
   DATABASE_URL=postgresql://postgres:84218%40Abhay@db.dxfnsbwqakhkevjxwgwo.supabase.co:5432/postgres
   FRONTEND_URL=https://your-domain.vercel.app
   ```

### 3.3 Production (Hostinger)

1. Access your Hostinger control panel
2. Go to **Advanced** → **Environment Variables** (or similar)
3. Add the same environment variables as Vercel
4. Update `FRONTEND_URL` to your Hostinger domain

## Step 4: Install Dependencies

```bash
npm install
```

This will install:
- `@supabase/supabase-js` - Supabase client
- `express` - Backend server
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `postgres` - PostgreSQL client

## Step 5: Update Google OAuth Redirect URIs

After deploying to production, add your production URLs to Google Cloud Console:

1. Go to Google Cloud Console → **Credentials**
2. Edit your OAuth 2.0 Client ID
3. Add authorized redirect URIs:
   ```
   https://your-domain.vercel.app
   https://your-domain.com (Hostinger)
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   ```

## Step 6: Run the Application

### Local Development

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend - Optional for this setup):
```bash
npm run server
```

The frontend will run on `http://localhost:3000`

### Production Deployment

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Hostinger
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `dist` folder to your Hostinger hosting
3. Configure Node.js application in Hostinger panel
4. Set `server.js` as the entry point

## Step 7: Test Authentication

1. Navigate to `/login` or `/register`
2. Click "Continue with Google"
3. Complete Google OAuth flow
4. You should be redirected to `/dashboard` upon success

## Troubleshooting

### Issue: "Invalid redirect URI"
- Ensure all redirect URIs are added in Google Cloud Console
- Check that Supabase callback URL is included

### Issue: "SUPABASE_ANON_KEY is not set"
- Verify environment variables are set correctly
- For Vite, variables must start with `VITE_`
- Restart dev server after changing `.env`

### Issue: Authentication not persisting
- Check browser localStorage
- Ensure cookies are enabled
- Verify Supabase session configuration

### Issue: CORS errors
- Update `FRONTEND_URL` in backend `.env`
- Check CORS configuration in `server.js`

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use environment variables** for all sensitive data
3. **Rotate keys regularly** in production
4. **Enable RLS (Row Level Security)** in Supabase for database tables
5. **Use HTTPS** in production

## Database Setup (Optional)

If you need to store additional user data:

```sql
-- Create a profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);
```

## Next Steps

- Customize the Dashboard page with your features
- Add protected routes for authenticated users
- Implement user profile management
- Add email/password authentication
- Set up database tables for your application

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Google OAuth docs: https://developers.google.com/identity/protocols/oauth2
- Contact: contact@samprabha.com
