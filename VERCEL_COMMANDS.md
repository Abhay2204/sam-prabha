# 🚀 Vercel Quick Commands Reference

## Installation

```bash
# Install Vercel CLI globally
npm install -g vercel

# Or use with npx (no installation needed)
npx vercel
```

## Authentication

```bash
# Login to Vercel
vercel login

# Logout
vercel logout

# Check who you're logged in as
vercel whoami
```

## Deployment

```bash
# Deploy to preview (development)
vercel

# Deploy to production
vercel --prod

# Deploy with specific name
vercel --name my-project

# Deploy and open in browser
vercel --prod --open
```

## Development

```bash
# Run locally with Vercel environment
vercel dev

# Run on specific port
vercel dev --port 3000

# Run with debug mode
vercel dev --debug
```

## Environment Variables

```bash
# List all environment variables
vercel env ls

# Add new environment variable
vercel env add VARIABLE_NAME

# Add for specific environment
vercel env add VARIABLE_NAME production

# Remove environment variable
vercel env rm VARIABLE_NAME

# Pull environment variables to local
vercel env pull .env.local
```

## Project Management

```bash
# Link local directory to Vercel project
vercel link

# List all projects
vercel list

# Remove project
vercel remove [project-name]

# Get project info
vercel inspect [deployment-url]
```

## Logs

```bash
# View deployment logs
vercel logs [deployment-url]

# Follow logs in real-time
vercel logs --follow

# View logs for production
vercel logs --prod

# View logs for specific function
vercel logs [deployment-url] --output
```

## Domains

```bash
# List all domains
vercel domains ls

# Add domain to project
vercel domains add example.com

# Remove domain
vercel domains rm example.com

# Inspect domain
vercel domains inspect example.com
```

## Deployments

```bash
# List all deployments
vercel ls

# List deployments for specific project
vercel ls [project-name]

# Remove deployment
vercel rm [deployment-url]

# Promote deployment to production
vercel promote [deployment-url]

# Alias deployment
vercel alias [deployment-url] [custom-url]
```

## Secrets (Deprecated - Use Environment Variables)

```bash
# Add secret
vercel secrets add secret-name secret-value

# List secrets
vercel secrets ls

# Remove secret
vercel secrets rm secret-name
```

## Teams

```bash
# List teams
vercel teams ls

# Switch team
vercel switch [team-name]

# Invite team member
vercel teams invite [email]
```

## Certificates

```bash
# List certificates
vercel certs ls

# Issue certificate
vercel certs issue [domain]

# Remove certificate
vercel certs rm [domain]
```

## Aliases

```bash
# List aliases
vercel alias ls

# Set alias
vercel alias set [deployment-url] [alias]

# Remove alias
vercel alias rm [alias]
```

## DNS

```bash
# List DNS records
vercel dns ls [domain]

# Add DNS record
vercel dns add [domain] [name] [type] [value]

# Remove DNS record
vercel dns rm [record-id]
```

## Help

```bash
# Get help
vercel help

# Get help for specific command
vercel help [command]

# Show version
vercel --version
```

## Common Workflows

### First Time Deployment
```bash
# 1. Login
vercel login

# 2. Deploy to preview
vercel

# 3. Add environment variables in dashboard
# Visit: https://vercel.com/dashboard

# 4. Deploy to production
vercel --prod
```

### Update Deployment
```bash
# Option 1: Direct deployment
vercel --prod

# Option 2: Git push (if connected)
git add .
git commit -m "Update"
git push origin main
```

### Local Development
```bash
# Start local dev server with Vercel environment
vercel dev

# Pull environment variables
vercel env pull .env.local

# Run your app
npm run dev
```

### Debugging
```bash
# View logs
vercel logs --follow

# Run with debug
vercel dev --debug

# Inspect deployment
vercel inspect [url]
```

### Rollback
```bash
# 1. List deployments
vercel ls

# 2. Promote previous deployment
vercel promote [previous-deployment-url]
```

## Environment-Specific Commands

### Production
```bash
vercel --prod
vercel logs --prod
vercel env add VAR_NAME production
```

### Preview
```bash
vercel
vercel logs [preview-url]
vercel env add VAR_NAME preview
```

### Development
```bash
vercel dev
vercel env add VAR_NAME development
```

## Useful Flags

```bash
--prod              # Deploy to production
--debug             # Show debug output
--force             # Force deployment
--yes               # Skip confirmation prompts
--no-clipboard      # Don't copy URL to clipboard
--public            # Make deployment public
--regions [regions] # Deploy to specific regions
--token [token]     # Use specific token
```

## Quick Reference Card

| Task | Command |
|------|---------|
| Deploy to preview | `vercel` |
| Deploy to production | `vercel --prod` |
| Local development | `vercel dev` |
| View logs | `vercel logs --follow` |
| Add env variable | `vercel env add VAR_NAME` |
| Pull env variables | `vercel env pull` |
| List deployments | `vercel ls` |
| Promote deployment | `vercel promote [url]` |
| Add domain | `vercel domains add example.com` |
| Get help | `vercel help` |

## Pro Tips

1. **Use `vercel dev` for local testing** - It simulates the production environment
2. **Pull env variables** - Use `vercel env pull` to sync variables locally
3. **Alias deployments** - Create custom URLs for specific deployments
4. **Use `--prod` flag** - Always specify when deploying to production
5. **Check logs** - Use `vercel logs --follow` to debug issues in real-time

## Common Issues

### "No existing credentials found"
```bash
vercel login
```

### "Project not linked"
```bash
vercel link
```

### "Build failed"
```bash
# Check logs
vercel logs [deployment-url]

# Test build locally
npm run build
```

### "Environment variable not found"
```bash
# Add in dashboard or via CLI
vercel env add VARIABLE_NAME
```

---

**Official Docs:** https://vercel.com/docs/cli
**Support:** https://vercel.com/support
