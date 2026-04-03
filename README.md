# Dev Tools Starter

Centralized linter and formatter configurations for team projects using Trunk. Provides standardized
code quality tooling with zero-config integration.

## Overview

Trunk plugin that exports pre-configured linting and formatting rules. Projects consume configs by
adding this plugin to `.trunk/trunk.yaml`, ensuring consistent code quality standards across the
organization.

## Quick Start

### For Project Maintainers

1. Install Trunk:

```bash
# Using Windows
curl https://get.trunk.io -fsSL | bash
# Using NPM
npm install -D @trunkio/launcher
# Setup Trunk
trunk init
# Share Trunk
trunk config share
```

2. Add plugin to `.trunk/trunk.yaml`:

```yaml
version: 0.1
# In consuming project's .trunk/trunk.yaml
plugins:
  sources:
    - id: dev-tools-starter
      # Remote URL
      uri: https://github.com/Ai-Vonie/dev-trunk-plugins-tools
      ref: main
      # Local path
      local: /path/to/local/dev-trunk-plugins-tools
```

3. Run linters:

```json
  "scripts": {
    "trunk:check": "trunk check --all --fix",
    "trunk:format": "trunk fmt --all",
    "trunk:init": "npm exec trunk init",
  },
```

## Overriding Configs

Projects can override configs when necessary:

```yaml
# .trunk/trunk.yaml
lint:
  definitions:
    - name: biome
      files: [typescript, javascript]
      commands:
        - name: check
          custom_config: ./custom-biome.json
```

## Troubleshooting

### Linter not running

```bash
trunk check --verbose # See detailed execution
trunk upgrade         # Update to latest plugin version
```

### Config not applied

```bash
trunk cache prune
trunk cache clean
trunk cache clean --all
trunk check --all
```

## Resources

- [Trunk Docs](https://trunk.io/docs/)

- [Trunk Plugins](https://github.com/trunk-io/plugins)

- [Trunk Config](https://github.com/trunk-io/configs)

- [Trunk Ignoring Issues](https://docs.trunk.io/code-quality/overview/linters/ignoring-issues-and-files)

- [Google Style Guides](https://google.github.io/styleguide/)
