# Production Setup for https://sam-prabha.vercel.app/

## Immediate Actions Required:

### 1. Update Supabase Redirect URLs

Go to: https://app.supabase.com/project/dxfnsbwqakhkevjxwgwo/auth/url-configuration

**Site URL:**
```
https://sam-prabha.vercel.app
```

**Redirect URLs (click "Add URL" for each):**
```
https://sam-prabha.vercel.app
https://sam-prabha.vercel.app/
https://sam-prabha.vercel.app/dashboard
http://localhost:3000
http://localhost:3000/
http://localhost:3000/dashboard
```

### 2. Enable Email Authentication

Go to: https://app.supabase.com/project/dxfnsbwqakhkevjxwgwo/auth/providers

1. Click on "Email" provider
2. Enable it
3. Save

### 3. Create Database Table

Go to: https://app.supabase.com/project/dxfnsbwqakhkevjxwgwo/editor

1. Click "SQL Editor"
2. Click "New Query"
3. Copy the entire content from `DATABASE_SETUP.sql`
4. Paste it
5. Click "Run" or press Ctrl+Enter

### 4. Update Google OAuth Redirect URIs

Go to: https://console.cloud.google.com/apis/credentials

1. Find your OAuth 2.0 Client ID
2. Click Edit
3. Add to "Authorized redirect URIs":
   ```
   https://sam-prabha.vercel.app
   https://dxfnsbwqakhkevjxwgwo.supabase.co/auth/v1/callback
   ```
4. Save

### 5. Verify Environment Variables in Vercel

Go to: https://vercel.com/your-username/sam-prabha/settings/environment-variables

Make sure these are set:
- `VITE_SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = [your anon key]
- `SUPABASE_URL` = `https://dxfnsbwqakhkevjxwgwo.supabase.co`
- `SUPABASE_ANON_KEY` = [your anon key]

If you need to add/update them, redeploy after:
```bash
vercel --prod
```

## Testing Your Production App:

### Test Email/Password Signup:
1. Go to https://sam-prabha.vercel.app/register
2. Fill in name, email, password
3. Click "Create Account"
4. Check email for verification link
5. Click verification link
6. Go to https://sam-prabha.vercel.app/login
7. Sign in with email/password
8. Should redirect to dashboard

### Test Google OAuth:
1. Go to https://sam-prabha.vercel.app/login
2. Click "Google" button
3. Select Google account
4. Should redirect to dashboard

### Test User Dashboard:
1. After login, you should see:
   - Your profile info
   - "My Documents" section (empty initially)
   - Quick action links

### Test Admin Dashboard:
1. Sign in with `abhaymallick2002@gmail.com`
2. You should see "Admin Panel" button
3. Click it to go to `/admin`
4. You should see:
   - Statistics (Total, Pending, In Progress, Completed)
   - "Add Document" button
   - Documents table (empty initially)

### Add a Test Document (Admin):
1. Go to admin dashboard
2. Click "Add Document"
3. Fill in:
   - User Email: your email
   - Document Name: "Test Research Paper"
   - Document URL: "https://example.com/doc.pdf"
   - Status: "In Progress"
4. Click "Add Document"
5. Sign out and sign in as that user
6. Check user dashboard - document should appear

## Current Status:

✅ App deployed: https://sam-prabha.vercel.app/
✅ Code is production-ready
✅ Email/Password auth implemented
✅ Google OAuth implemented
✅ User dashboard implemented
✅ Admin dashboard implemented
✅ Profile management implemented

⏳ Pending (you need to do):
- [ ] Update Supabase redirect URLs
- [ ] Enable email auth in Supabase
- [ ] Run database setup SQL
- [ ] Update Google OAuth redirect URIs
- [ ] Test signup/login flows

## Admin Features:

As admin (abhaymallick2002@gmail.com), you can:
- Access `/admin` route
- View all users' documents
- Add documents for any user
- Update document status (Pending/In Progress/Completed)
- Delete documents
- Search documents by email or name

## User Features:

Regular users can:
- Sign up with email/password or Google
- View their own documents
- See document status and progress
- Edit their profile
- Access services

## Troubleshooting:

**Login not working:**
- Check Supabase redirect URLs are updated
- Clear browser cache
- Check browser console for errors

**Google OAuth showing full URL:**
- This is normal during redirect
- User won't see it after redirect completes

**Documents not showing:**
- Make sure database table is created
- Check SQL was run successfully
- Check user email matches document user_email

**Can't access admin dashboard:**
- Make sure you're signed in with admin email
- Check `contexts/AuthContext.tsx` has your email in adminEmails array

## Next Steps After Setup:

1. Test all authentication flows
2. Add some test documents
3. Invite users to test
4. Customize email templates in Supabase
5. Add more features as needed

Your production URL: https://sam-prabha.vercel.app/
