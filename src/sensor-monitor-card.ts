import { customElement } from 'lit/decorators.js';
import { MonitorCardBase } from './card-base.js';
import type { CardInfo } from './ha/types.js';

declare let __BUILD_TIMESTAMP__: string;

const VERSION = '1.7.0';
const BUILD_TIMESTAMP = typeof __BUILD_TIMESTAMP__ !== 'undefined' ? __BUILD_TIMESTAMP__ : 'dev';
const CARD_VERSION = `${VERSION} (${BUILD_TIMESTAMP})`;

console.info(
  `%c SENSOR-MONITORING-CARD %c ${CARD_VERSION} `,
  'color: white; background: #6c5ce7; font-weight: 700;',
  'color: #6c5ce7; background: white; font-weight: 700;',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'sensor-monitor-card',
  name: 'Sensor Monitor Card',
  description: 'Monitor any sensor with custom names, units, setpoints, and thresholds',
  preview: true,
  documentationURL: 'https://github.com/wilsto/sensor-monitor-card',
});

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

  static async getConfigElement(): Promise<HTMLElement> {
    await import('./editor.js');
    return document.createElement('sensor-monitor-card-editor');
  }

  static getStubConfig(): Record<string, unknown> {
    return {
      sensors: {
        custom: { entity: '' },
      },
    };
  }
}
