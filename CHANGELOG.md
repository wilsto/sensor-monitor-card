# Changelog

All notable changes to Sensor Monitor Card will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/).

## [1.2.0] - 2026-02-23

### Changed

- Migrated entire codebase from JavaScript to TypeScript
- Added Lit decorators (@customElement, @property, @state) replacing static properties
- Centralized type system with typed interfaces (CardConfig, SensorData, HomeAssistant)
- Added typescript-eslint support to ESLint configuration

### Added

- TypeScript strict mode with typed sensor registry and card configuration
- Shared `ha/types.ts` module for Home Assistant type definitions

## [1.1.0] - 2026-02-21

### Changed

- Migrated to new monorepo architecture with shared core
- Modernized toolchain: Lit 3.3, Node 22 LTS, Rollup 4, Vitest 4

## [1.0.x and earlier]

See commit history on the [legacy repository](https://github.com/wilsto/sensor-monitor-card/commits/main).
