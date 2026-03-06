const path = require('path');
const { spawn } = require('child_process');

const tscCliPath = path.resolve(__dirname, '..', 'node_modules', 'typescript', 'bin', 'tsc');

function startWatcher(args) {
  const child = spawn(process.execPath, [tscCliPath, ...args], {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      process.exitCode = code || 1;
      process.kill(process.pid, 'SIGTERM');
    }
  });

  return child;
}

const watchers = [
  startWatcher(['--watch', '-p', 'tsconfig.json']),
  startWatcher(['--watch', '-p', 'tsconfig.esm.json']),
];

function shutdown() {
  for (const watcher of watchers) {
    if (!watcher.killed) {
      watcher.kill('SIGTERM');
    }
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
