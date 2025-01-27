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
      time: true
    }]
  }