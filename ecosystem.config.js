module.exports = {
  apps: [
    {
      name: 'tutorbuddy.co',
      script: '.next/standalone/server.js',
      cwd: '/home/tutorbuddy/htdocs/tutorbuddy.co/tutorbuddy.co',
      interpreter: 'node',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      stop_exit_codes: '0',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
}; 