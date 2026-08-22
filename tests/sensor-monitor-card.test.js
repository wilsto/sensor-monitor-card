import { describe, test, expect, beforeEach } from 'vitest';
import { SensorMonitorCard } from '../src/sensor-monitor-card.js';

// The generic card has no registry: the user brings the whole definition.
const validConfig = {
  sensors: {
    filament_humidity: {
      entity: 'sensor.filament_box_humidity',
      name: 'Filament Box',
      unit: '%',
      setpoint: 30,
      step: 5,
    },
  },
};

describe('SensorMonitorCard', () => {
  let card;

  beforeEach(() => {
    card = new SensorMonitorCard();
  });

  describe('static properties', () => {
    test('should have CARD_INFO with required fields', () => {
      expect(SensorMonitorCard.CARD_INFO).toBeDefined();
      expect(SensorMonitorCard.CARD_INFO.cardType).toBe('sensor-monitor-card');
      expect(SensorMonitorCard.CARD_INFO.cardName).toBe('Sensor Monitor Card');
      expect(typeof SensorMonitorCard.CARD_INFO.cardDescription).toBe('string');
    });

    // An empty registry is the point of this card, not an accident: it is what
    // makes every sensor type acceptable below.
    test('should have an empty SENSORS registry', () => {
      expect(SensorMonitorCard.SENSORS).toEqual({});
    });
  });

  describe('setConfig', () => {
    test('should accept a fully user-defined sensor', () => {
      expect(() => card.setConfig(validConfig)).not.toThrow();
    });

    test('should throw if sensors key is missing', () => {
      expect(() => card.setConfig({})).toThrow('sensors');
    });

    test('should throw if sensor entity is missing', () => {
      expect(() => card.setConfig({ sensors: { filament_humidity: {} } })).toThrow('entity');
    });

    test('should throw on empty sensor array', () => {
      expect(() => card.setConfig({ sensors: { filament_humidity: [] } })).toThrow(
        'Empty sensor array',
      );
    });

    test('should merge display defaults', () => {
      card.setConfig(validConfig);
      const cfg = card.getConfig();
      expect(cfg.display.show_names).toBe(true);
      expect(cfg.display.language).toBe('en');
    });

    test('should override display defaults with user values', () => {
      card.setConfig({ ...validConfig, display: { compact: true, language: 'fr' } });
      const cfg = card.getConfig();
      expect(cfg.display.compact).toBe(true);
      expect(cfg.display.language).toBe('fr');
      // other defaults remain
      expect(cfg.display.show_names).toBe(true);
    });

    test('should keep the user-defined properties on the sensor', () => {
      card.setConfig(validConfig);
      const [sensor] = card.getConfig().sensors.filament_humidity;
      expect(sensor.name).toBe('Filament Box');
      expect(sensor.setpoint).toBe(30);
      expect(sensor.title).toBe('Filament Box');
    });

    // Registry cards flag unknown types; the generic card, whose registry is
    // empty on purpose, must accept any name the user invents.
    test('should not flag any sensor type as invalid', () => {
      card.setConfig({ sensors: { anything_goes: { entity: 'sensor.x' } } });
      expect(card.getConfig().sensors.anything_goes[0].invalid).toBe(false);
    });
  });
});
