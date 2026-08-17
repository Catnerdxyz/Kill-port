# killport

> **Kill the process running on a specific port — instantly.**

[![npm version](https://badge.fury.io/js/@catnerd%2Fkillport-cli.svg)](https://www.npmjs.com/package/@catnerd/killport-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@catnerd/killport-cli.svg)](https://www.npmjs.com/package/@catnerd/killport-cli)

Tired of the dreaded `Error: listen EADDRINUSE: address already in use :::3000`? 

**killport** is a zero-dependency CLI tool that instantly identifies and terminates the process hogging your port. Stop googling `lsof` and `taskkill` commands—just run one command and get back to coding.

## Features

- **Cross-Platform**: Works seamlessly on **Windows**, **macOS**, and **Linux**.
- **Instant**: Finds and kills processes in milliseconds.
- **Zero Dependencies**: Pure Node.js, lightweight and secure.
- **Simple**: One command, no complex syntax.

## Installation

### Global Install (Recommended)
Install once, use anywhere in your terminal:

```bash
npm install -g @catnerd/killport-cli
```

Run Without Installing
Try it out instantly via npx:

```bash
npx @catnerd/killport-cli 3000
```

## Usage

```bash
killport <port-number>
```

## Examples
Kill a process on port 3000:

```bash
killport 3000
```

When the port is already free:

```bash
killport 8080
```

## How It Works
killport automatically detects your operating system and uses the native tools to find and terminate processes.

## Contributing
Found a bug or have a feature request? We welcome contributions!

Fork the repository.
Create your feature branch:
```bash
git checkout -b feature/amazing-feature
```
Commit your changes:
```bash
git commit -m 'Add amazing feature'
```
Push to the branch:
```bash
git push origin feature/amazing-feature
```
Open a Pull Request.

## License
Distributed under the MIT License. See LICENSE for more information.

Made with ❤️ for developers everywhere.
Distributed under the MIT License. See LICENSE for more information.

Made with ❤️ for developers everywhere.
