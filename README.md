> Kill the process running on a specific port — instantly.

[![npm version](https://badge.fury.io/js/kill-port.svg)](https://www.npmjs.com/package/kill-port)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ever gotten the dreaded `Error: listen EADDRINUSE: address already in use :::3000`? 

**killport** is a tiny CLI tool that finds and kills the process hogging your port. No more googling `lsof` commands every single time.

## Features

- **Works everywhere** — Windows, macOS, and Linux
- **One command** — `killport 3000` and you're done
- **Zero dependencies** — pure Node.js
- **Lightweight** — installs in under 1 second

## Installation

### Global install (recommended)
```bash
npm install -g kill-port
Then use it anywhere:

bash
killport 3000
Run without installing
bash
npx killport 3000
Usage
bash
killport <port-number>
Example
bash
killport 3000
# ✅ Successfully killed process on port 3000 (PID: 1234)
If nothing is running on the port:

bash
killport 3000
# ✅ No process found running on port 3000
How It Works
Finds the process ID (PID) using:

netstat on Windows

lsof on macOS/Linux

Kills it with:

taskkill on Windows

kill -9 on macOS/Linux

Contributing
Found a bug? Have an idea? Open an issue or submit a PR!

Fork the repo

Create your branch (git checkout -b feature/amazing)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing)

Open a Pull Request

License
MIT © Catnerdxyz

Made with ❤️ for developers everywhere.
