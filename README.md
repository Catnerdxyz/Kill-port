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
