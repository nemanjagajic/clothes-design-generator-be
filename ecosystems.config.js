module.exports = {
  apps: [
    {
      name: 'clothes-be-1337',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};
