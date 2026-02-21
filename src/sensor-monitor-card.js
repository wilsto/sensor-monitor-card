/**
 * @fileoverview Sensor Monitor Card - Generic sensor monitoring card for Home Assistant
 * No predefined sensor presets — users define their own sensors, units, setpoints.
 */

import { MonitorCardBase } from './card-base.js';

const VERSION = '1.1.0';
/* global __BUILD_TIMESTAMP__ */
const BUILD_TIMESTAMP = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : 'dev';
const CARD_VERSION = `${VERSION} (${BUILD_TIMESTAMP})`;

console.info(
  `%c SENSOR-MONITORING-CARD %c ${CARD_VERSION} `,
  'color: white; background: #6c5ce7; font-weight: 700;',
  'color: #6c5ce7; background: white; font-weight: 700;',
);

export class SensorMonitorCard extends MonitorCardBase {
  static CARD_INFO = {
    cardType: 'sensor-monitor-card',
    cardName: 'Sensor Monitor Card',
    cardDescription:
      'A generic Home Assistant card for monitoring any sensor with customizable names, units, setpoints, and display options',
  };

  // Empty registry — all sensors are user-defined, no validation against a fixed list
  static SENSORS = {};

  /**
   * Override setConfig to skip sensor type validation (all types accepted)
   */
  setConfig(config) {
    // Call parent but sensor validation is skipped when SENSORS is empty
    super.setConfig(config);
  }
}

customElements.define('sensor-monitor-card', SensorMonitorCard);
