import { html, LitElement } from 'lit';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';

import style from './style';
import cardContent from './cardContents';
import { translations } from './const';
import { sensors, sensor_translations } from './const_sensor';

import './initialize';

class SensorMonitorCard extends ScopedRegistryHost(LitElement) {
  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  static get styles() {
    return [
      style,
    ];
  }

  render() {
    this.config = this.getConfig();

    const  cardBodyContent = []; 

    for (let i = 0; i <= sensors.length; i++) { 
      if (this.config.sensor[i] !== undefined) { 
        if (this.config.compact) {
          cardBodyContent.push(cardContent.generateCompactBody(this.config.sensor[i]));
        } else {
          cardBodyContent.push(cardContent.generateBody(this.config.sensor[i]));
        }
      } 
    }
    return html`
    <div id="sensor-monitor-card">
      ${cardContent.generateTitle(this.config)}
      ${cardBodyContent}
    </div>`;
  }

  getConfig () {
    this.config.sensor = [];

    this.config.title = this.config.title ?? '';
    this.config.compact = this.config.compact ?? false;
    this.config.show_names = this.config.show_names ?? true;
    this.config.show_labels = this.config.show_labels ?? true;
    this.config.show_last_updated = this.config.show_last_updated ?? false;
    this.config.language = this.config.language ?? 'en';

    this.config.override = this.config.override ?? false;

    
    for (let i = 0; i <= sensors.length; i++) {
      let sensor = sensors[i];

      if (sensor) {
        let sensor_id = sensor.id;
        if (this.config[sensor_id]) {
          this.config.sensor[i] = {};
          this.config.sensor[i].entity = this.config[sensor_id] ;
          this.config.sensor[i].name = this.config[`${sensor_id}_name`] || sensor_translations[this.config.language]["sensor"][sensor_id]  || 'Name?'; 
          this.config.sensor[i].image = this.config[`${sensor_id}_image`] || sensor.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Infobox_info_icon.svg'; 
          this.config.sensor[i].unit = this.config[`${sensor_id}_unit`] || sensor.unit || 'Unit?';  
          this.config.sensor[i].setpoint = this.config[`${sensor_id}_setpoint`] || parseFloat(sensor.setpoint) || 100 ;
          this.config.sensor[i].step = this.config[`${sensor_id}_step`] || parseFloat(sensor.step) ||  10 ;
          this.config.sensor[i].override = this.config[`${sensor_id}_override`] || parseFloat(sensor.override) ||  76.5 ;
          this.config.sensor[i] = this.calculateData(this.config.sensor[i]);
        }
      }
    }
   
    return this.config;
  }

  calculateData(sensor) {
    const newData = sensor;
    
    newData.title = this.config.show_names ? sensor.name : "";
    newData.value = parseFloat(this.hass.states[sensor.entity].state);
    if (this.config.override){
      newData.value = parseFloat(sensor.override);
    }
    const countDecimals = this.countDecimals(parseFloat(sensor.setpoint));
    if (newData.value) {
      newData.value = (newData.value < 10 ? newData.value.toFixed(2): newData.value < 100 ? newData.value.toFixed(1): newData.value.toFixed(0))
    }
    newData.last_updated =  this.config.show_last_updated ? this.timeFromNow(this.hass.states[sensor.entity].last_updated, this.config.language) : '';

    newData.setpoint_class = [
      (sensor.setpoint - 2 * sensor.step).toFixed(countDecimals),
      (sensor.setpoint - sensor.step).toFixed(countDecimals),
      (sensor.setpoint).toFixed(countDecimals),
      (sensor.setpoint + sensor.step).toFixed(countDecimals),
      (sensor.setpoint + 2 * sensor.step).toFixed(countDecimals)
    ]

    newData.separator = this.config.show_labels ? "-":"";
    newData.color = "transparent";
    if (Number(newData.value)  < Number(newData.setpoint_class[0])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][1]:"";
      newData.color = "#e17055";
    } else if (Number(newData.value)  >= Number(newData.setpoint_class[0]) && Number(newData.value)  < Number(newData.setpoint_class[1])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][2]:"";
      newData.color = "#fdcb6e";
    } else if (Number(newData.value)  >= Number(newData.setpoint_class[1]) && Number(newData.value)  < Number(newData.setpoint_class[2])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][3]:"";
      newData.color = "#00b894";
    } else if (Number(newData.value)  >= Number(newData.setpoint_class[2]) && Number(newData.value)  < Number(newData.setpoint_class[3])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][4]:"";
      newData.color = "#00b894";
    } else if (Number(newData.value)  >= Number(newData.setpoint_class[3]) && Number(newData.value)  < Number(newData.setpoint_class[4])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][5]:"";
      newData.color = "#fdcb6e";
    } else if (Number(newData.value)  >= Number(newData.setpoint_class[4])) {
      newData.state = this.config.show_labels ? translations[this.config.language]["state"][6]:"";
      newData.color = "#e17055";
    }

    newData.pct = Math.max(0, Math.min(95, (Math.max(0, newData.value - (sensor.setpoint - 3 * sensor.step)) / (6 * sensor.step)) * 0.73 * 100 + 22)).toFixed(0);
    newData.side_align = newData.value > sensor.setpoint ? "right" : "left" ;
    newData.pct_cursor = newData.value > sensor.setpoint ? 100 - parseFloat(newData.pct) : parseFloat(newData.pct) -2;    
    newData.pct_state_step = newData.value > sensor.setpoint ? 100 - parseFloat(newData.pct): parseFloat(newData.pct);
    return newData
  }

  countDecimals(number) {
    if (Math.floor(number) === number) { // si c'est un nombre entier
      return 0;
    }
    return number.toString().split(".")[1].length || 0;
  }

  timeFromNow(dateTime, language) {
    const date = new Date(dateTime);
    const diff = Date.now() - date.getTime();
  
    const t = (key, n) => {
      let plural = n == 1 ? '' : 's'
      let translation = translations[language]["time"][key] ;
      translation = translation.replace('{'+ key + '}', n) 
      translation = translation.replace('{plural}', plural) 
      return translation ;

    };

    if (diff < 60 * 1000) {
      const seconds = Math.floor(diff / (1000));
      return t('seconds', seconds);
    } else if (diff < 60 * 60 * 1000) {
      const minutes = Math.floor(diff / (60 * 1000));
      return t('minutes', minutes);
    } else if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (60 * 60 * 1000));
      return t('hours', hours);
    } else {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      return t('days', days);
    }
  }


  setConfig(config) {
    this.config =  { ...config };
  }

}

customElements.define('sensor-monitor-card', SensorMonitorCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'sensor-monitor-card',
  name: 'Sensor Monitor Card',
  preview: true,
  description: 'A custom Sensor Monitor Card',
  documentationURL: 'https://github.com/wilsto/sensor-monitor-card',
});
