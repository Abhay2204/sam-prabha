# 🚀 START HERE - Authentication Setup

## ⚠️ IMPORTANT: Before You Run the App

Your authentication system is ready, but you need to add ONE critical piece of information.

## 🔑 Get Your Supabase Anon Key (Required!)

### Step 1: Go to Supabase Dashboard
Visit: https://app.supabase.com

### Step 2: Select Your Project
Click on project: **dxfnsbwqakhkevjxwgwo**

### Step 3: Get Your Key
1. Click **Settings** (gear icon in sidebar)
2. Click **API**
3. Find the section "Project API keys"
4. Copy the **anon** **public** key (it's a long string starting with "eyJ...")

### Step 4: Add Key to .env File
Open the `.env` file in your project and replace `your_supabase_anon_key_here` with your actual key:

```env
VITE_SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  ← Paste your key here

SUPABASE_URL=https://dxfnsbwqakhkevjxwgwo.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  ← Paste your key here (same key)
```

## 🎯 Enable Google OAuth (Required!)

### Step 1: In Supabase Dashboard
1. Go to **Authentication** → **Providers**
2. Find **Google** and toggle it ON
3. You'll see fields for Client ID and Client Secret

### Step 2: Get Google OAuth Credentials
1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Choose **Web application**
6. Add authorized redirect URI:
   ```
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   ```
7. Copy the **Client ID** and **Client Secret**

### Step 3: Add to Supabase
1. Go back to Supabase → Authentication → Providers → Google
2. Paste your **Client ID**
3. Paste your **Client Secret**
4. Click **Save**

## ✅ Run the App

```bash
npm run dev
```

Visit: http://localhost:3000

## 🧪 Test Authentication

1. Click **Login** in the navbar
2. Click **Continue with Google**
3. Sign in with your Google account
4. You should be redirected to the Dashboard!

## 📚 Need More Help?

- **QUICKSTART.md** - Quick setup guide
- **SETUP_AUTH.md** - Detailed setup with screenshots
- **DEPLOYMENT_CHECKLIST.md** - Deploy to production

## 🎉 That's It!

Once you add your Supabase key and enable Google OAuth, everything will work!

---

**Current Status:**
- ✅ Code is ready
- ✅ Dependencies installed
- ⏳ Waiting for Supabase key
- ⏳ Waiting for Google OAuth setup

**After Setup:**
- ✅ Login page works
- ✅ Register page works
- ✅ Dashboard shows user info
- ✅ Session persists
- ✅ Ready to deploy!
