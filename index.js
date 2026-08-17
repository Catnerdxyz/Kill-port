const { exec } = require('child_process');
const port = process.argv[2];

if (!port) {
  console.error('-USAGE ERROR- kill-port <port-number>');
  process.exit(1);
}

const platform = process.platform;
let command;

if (platform === 'win32') {
  // Windows
  command = `netstat -ano | findstr :${port}`;
} else {
  // Mac / Linux
  command = `lsof -i :${port}`;
}

exec(command, (error, stdout) => {
  if (error || !stdout) {
    console.log(`No process found running on port ${port}`);
    process.exit(0);
  }

  // Extract the PID
  let pid;
  if (platform === 'win32') {
    const lines = stdout.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    const parts = lastLine.trim().split(/\s+/);
    pid = parts[parts.length - 1];
  } else {
    const lines = stdout.trim().split('\n');
    const line = lines[1]; // Skip the header row
    if (!line) {
      console.log(`No process found on port ${port}`);
      process.exit(0);
    }
    const parts = line.trim().split(/\s+/);
    pid = parts[1];
  }

  if (!pid) {
    console.log('ERROR Could not find PID');
    process.exit(1);
  }

  // Kill the process
  let killCmd;
  if (platform === 'win32') {
    killCmd = `taskkill /PID ${pid} /F`;
  } else {
    killCmd = `kill -9 ${pid}`;
  }

  exec(killCmd, (killErr) => {
    if (killErr) {
      console.error(`ERROR Failed to kill process on port ${port}`);
      process.exit(1);
    }
    console.log(`Successfully killed process on port ${port} (PID: ${pid})`);
  });
});