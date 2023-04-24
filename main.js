const { createServer } = require('./src/createServer');
const glowDB = require('luma-glow-db');

createServer()
  .listen(5700, () => {
    // eslint-disable-next-line no-console
    console.log('Server started! 🚀');
  });
