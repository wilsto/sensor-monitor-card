# Changelog

All notable changes to Sensor Monitor Card will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/).

## [1.8.0] - 2026-02-24

### Added

- Per-sensor `battery_entity` parameter: displays battery level indicator next to sensor data (core feature from pool-monitor-card#9)

## [1.7.0] - 2026-02-24

### Added

- Global `status_entity` parameter: displays a colored status badge at the top of the card with auto-detection (numeric 0-100 or text states) (core feature from pool-monitor-card#10)

## [1.6.0] - 2026-02-24

### Added

- Dynamic setpoint and min_limit from entities: optional `setpoint_entity` and `min_limit_entity` per sensor to read threshold values from `input_number` helpers or template sensors at runtime (core feature from pool-monitor-card#59)
- Visual card editor fields for Setpoint entity / Min limit entity

## [1.5.0] - 2026-02-24

### Added

- Customizable last updated timestamp: optional `last_updated_entity` and `last_updated_attribute` per sensor to display measurement time from a specific entity attribute (core feature from pool-monitor-card#65)
- Visual card editor fields for Last updated entity / Last updated attribute

## [1.4.0] - 2026-02-24

### Added

- Asymmetric ranges: optional `step_low` / `step_high` parameters per sensor allow different step sizes below and above the setpoint (core feature from pool-monitor-card#72)
- Visual card editor fields for Step low / Step high

## [1.3.0] - 2026-02-23

### Added

- Visual card editor with live preview — configure cards directly from the HA UI
- Cards now appear in the Home Assistant card picker under "Custom cards"
- Sensor list with expand/collapse, entity picker, and delete per sensor
- Freeform sensor type input for custom sensor keys
- Display Options and Colors sections in editor

### Fixed

- Cards no longer crash when multiple monitor cards are on the same dashboard

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
