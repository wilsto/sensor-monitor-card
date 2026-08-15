# Changelog

All notable changes to Sensor Monitor Card will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/).

## [1.11.1] - 2026-08-15

### Documentation

- **Added a Styling section to the README.** The previous release made the card work with [card-mod](https://github.com/thomasloven/lovelace-card-mod) but said so only in the release notes, which scroll away. The README now carries copy-paste examples and the list of classes you can target — transparent background, title size, icon colour, scale size.

## [1.11.0] - 2026-08-15

### Fixed

- **Two cards publishing the same element name no longer take the page down.** Registration is now guarded: the card that loads second declines and explains itself in the console, instead of throwing an uncaught error that killed its whole script.
- The version announced in the console banner is read from the release itself, so it can no longer drift from the published version.

### Changed

- **The card now renders a standard Home Assistant `ha-card` container.** It previously drew a plain container and imitated one, which is why card-mod had no effect on it while working on every other card. Styling it works now:

```yaml
card_mod:
  style: |
    ha-card {
      background: transparent;
      box-shadow: none;
      border: none;
    }
```

  ⚠️ If you had worked around this by styling `:host`, check your rules — the background, border and shadow are now painted by `ha-card`.

- **Sizes and colours can be restyled.** Static sizing moved out of inline attributes into named classes, so a stylesheet can reach it. An inline style beats any injected rule, which is what made this impossible before:

```yaml
card_mod:
  style: |
    .pool-monitor-title { font-size: 2rem; }
    .entity-icon { color: var(--error-color); }
    .gauge-scale { font-size: 1.1em; }
```

## [1.10.0] - 2026-08-15

### Fixed

- **The *Mode* dropdown (centric / heatflow) works again**, and the **+** button to add a sensor block. Both had stopped responding on recent Home Assistant versions — reported in #4.
- **The visual editor works again on Home Assistant 2026.5 and later.** HA removed an internal component the editor relied on, and nine text fields silently stopped appearing — *Name override*, *Unit override*, *Setpoint*, *Step*, *Min limit*, *Step low*, *Step high*, *Image URL*, *Last updated attribute*. They were unreachable from the interface, though still editable in YAML. The editor no longer depends on Home Assistant's internal components, so this cannot happen again on a future update.
- **`min` and `max` set the scale again.** They were documented as numbers defining the range, but a number was read as an entity name, found nothing, and was ignored without warning. A number is now a scale bound; a string is still an entity whose value places a marker on the bar.
- **Six translated languages were missing from the language menu** — Czech, Hebrew, Hungarian, Romanian, Russian, Swedish. Three entries that had no translation behind them (Polish, Simplified and Traditional Chinese) silently fell back to English; they are gone. The menu now lists all 15 translations, each in its own language.

### Added

- **Scales whose ideal value is at one end.** `centric` and `heatflow` both place the ideal in the middle, which does not suit quantities like PM2.5 (0 is best) or ORP (higher is best). Give the four class boundaries explicitly and say which way the scale reads:

```yaml
sensors:
  pm25:
    entity: sensor.pm25
    min: 0
    max: 20
    limits: [2, 5, 10, 15]
    # direction: lower_is_better (default) | higher_is_better
```

  Approach contributed by [@rpirsc13](https://github.com/rpirsc13). Default thresholds per sensor will follow once their published sources are confirmed.
- **A `CONTRIBUTING.md`** explaining how this repository is built and how to propose a change or a translation.

## [1.9.0] - 2026-08-15

### Fixed

- Sensors with an unavailable/unknown state no longer prevent the card from rendering
- Sensor add dropdown in the visual editor works again on recent Home Assistant versions (native select instead of the removed mwc-list-item)
- `status_entity` now recognises text states GREEN/RED/YELLOW/high/low/normal

### Added

- `name_font_size` and `name_font_weight` display options, in both normal and compact mode, also exposed in the visual editor

> These core changes shipped in pool-monitor v2.10.2 / v2.11.0 on 2026-03-29 but never reached this card: the release is tagged per package, and this one was not re-tagged.

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
