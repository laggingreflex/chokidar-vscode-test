const chokidar = require('chokidar');

const watcher = chokidar.watch('.', {
  ignored: ['node_modules', '.git'],
  persistent: true,
});

watcher.on('all', (evt, file) => console.log(evt, file));
