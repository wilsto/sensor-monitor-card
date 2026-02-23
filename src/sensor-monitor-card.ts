import { customElement } from 'lit/decorators.js';
import { MonitorCardBase } from '../../core/src/card-base.js';
import type { CardInfo } from '../../core/src/ha/types.js';

declare let __BUILD_TIMESTAMP__: string;

const VERSION = '1.2.0';
const BUILD_TIMESTAMP = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : 'dev';
const CARD_VERSION = `${VERSION} (${BUILD_TIMESTAMP})`;

console.info(
  `%c SENSOR-MONITORING-CARD %c ${CARD_VERSION} `,
  'color: white; background: #6c5ce7; font-weight: 700;',
  'color: #6c5ce7; background: white; font-weight: 700;',
);

@customElement('sensor-monitor-card')
export class SensorMonitorCard extends MonitorCardBase {
  static CARD_INFO: CardInfo = {
    cardType: 'sensor-monitor-card',
    cardName: 'Sensor Monitor Card',
    cardDescription:
      'A generic Home Assistant card for monitoring any sensor with customizable names, units, setpoints, and display options',
  };

  static SENSORS = {};

  setConfig(config: any): void {
    super.setConfig(config);
  }
}
