module.exports = { // pm2 start process.config.js
  apps: [
    {
      name: 'gateway',
      script: './server/gateway.js',
      watch: true,
      instances: 1,
      exec_mode: 'cluster',
    },
    {
      name: 'messanger',
      script: './server/messanger.js',
      watch: true,
      instances: 1,
      exec_mode: 'cluster',
    },
    {
      name: 'websocket',
      script: './server/websocket.js',
      watch: true,
      instances: 1,
      exec_mode: 'cluster',
    },
    {
      name: 'userList',
      script: './server/userList.js',
      watch: true,
      instances: 1,
      exec_mode: 'cluster',

    },
    {
      name: 'frontend',
      script: './server/frontend.js',
      watch: true,
      instances: 1,
      exec_mode: 'cluster',

    },
]};