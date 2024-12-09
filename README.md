# CSDS Inc Website

Corporate website for CSDS Inc, built with SvelteKit.

## Development

Once you've cloned the project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Production Deployment

This application uses PM2 for production process management. On the production server:

1. Create `ecosystem.config.cjs` in the project root:
```javascript
module.exports = {
  apps: [{
    name: 'csdsinc',
    script: 'npm',
    args: 'run preview -- --host --port 3000',
    interpreter: 'none',
    env: {
      NODE_ENV: 'production',
      BASE_PATH: ''
    },
    watch: false,
    max_memory_restart: '1G',
    exp_backoff_restart_delay: 100
  }]
}
```

2. Deploy and run:
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save
pm2 startup
```

3. PM2 Management Commands:
```bash
pm2 status        # Check app status
pm2 logs csdsinc  # View logs
pm2 restart csdsinc # Restart app
pm2 stop csdsinc   # Stop app
```

Note: `ecosystem.config.cjs` contains server-specific configuration and should not be committed to the repository.