module.exports = {
    apps: [{
      name: 'csdsinc',
      script: 'build/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        PROTOCOL_HEADER: 'x-forwarded-proto',
        HOST_HEADER: 'host',
        ADDRESS_HEADER: 'x-forwarded-for',
        XFF_DEPTH: 2
      },
      watch: false,
      max_memory_restart: '1G',
      exp_backoff_restart_delay: 100,
      exec_mode: 'fork',
      autorestart: true,
      time: true,
      
      // Log configuration
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: '/var/log/pm2/csdsinc-error.log',
      out_file: '/var/log/pm2/csdsinc-out.log',
      merge_logs: true,
      
      // Log rotation settings
      log_rotate_interval: '1d',    // Rotate daily
      log_max_size: '10M',         // Rotate when size exceeds 10MB
      log_rotate_max_files: 10     // Keep last 10 rotated files
    }]
  }