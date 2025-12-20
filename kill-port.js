const { exec } = require('child_process');

const port = 5000;

exec(`netstat -ano | findstr :${port}`, (err, stdout) => {
  if (stdout) {
    const lines = stdout.trim().split('\n');
    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      console.log(`Matando processo PID: ${pid}`);
      exec(`taskkill /PID ${pid} /F`);
    });
  }
});