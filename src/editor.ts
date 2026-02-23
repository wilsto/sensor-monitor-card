import { html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { MonitorEditorBase } from './editor/editor-base.js';
import '../../core/src/editor/sensor-editor.js';
import type { SensorsRegistry } from './ha/types.js';

@customElement('sensor-monitor-card-editor')
export class SensorMonitorCardEditor extends MonitorEditorBase {
  get sensorsRegistry(): SensorsRegistry {
    return {};
  }

  get hasPresets(): boolean {
    return false;
  }

  renderSensorSection(): TemplateResult {
    return html`
      <monitor-sensor-editor
        .hass=${this.hass}
        .sensors=${this._config.sensors || {}}
        .registry=${this.sensorsRegistry}
        .freeform=${true}
        @sensors-changed=${this._sensorsChanged}
      ></monitor-sensor-editor>
    `;
  }
}
