
# Sensor Monitor Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

![all](example/hero.png)
[Click me to see more screenshots](example/screenshots.md)

## Multilanguage ReadMe

Click on the following button to choose the language of your ReadMe : [![fr](https://img.shields.io/badge/lang-fr-green.svg)](/README-fr.md) [![en](https://img.shields.io/badge/lang-en-red.svg)](/README.md)

## TOC <!-- omit in toc -->

- [Description](#description)
- [Support](#support)
- [Install](#install)
  - [via HACS](#via-hacs)
  - [Manualy](#manualy)
- [Lovelace Set up](#lovelace-set-up)
  - [Using UI](#using-ui)
  - [Using YAML](#using-yaml)
- [Parameters](#parameters)  
  - [Main options](#main-options)
  - [Advanced options](#advanced-options)
- [Hardware](#hardware)

---

## Description

The "Sensor Monitor Card" is a home assistant plugin that provides the ability to display customizable sensor information within ranges. 

The plugin is highly customizable and offers unparalleled flexibility, making it a valuable tool for users looking to monitor just about any type of data in their home environment.

You can use also 2 pre-defined monitoring card :

- The "[Pool Monitoring Card](https://github.com/wilsto/pool-monitor-card)" is a home assistant plugin that display information of 1 to 12 pre-defined sensors of your swimming pool : temperature, pH, ORP levels, TDS, salinity, CYA, calcium, phosphate, alkalinity, filter pressure, free chlorine, total chlorine

- [Aquarium Monitoring Card]() ** In progress

---

## Support

Hey dude! Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://bmc.link/wilsto)

---

## Install


#### via HACS

Until the Home Assistant sensor Monitor card is available by default in the HACS directory, click on:
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=wilsto&repository=sensor-monitor-card&category=plugin)

#### Manualy

1. Download the `sensor_monitor_card.js` file from the [latest release available](https://github.com/wilsto/sensor-monitor-card/releases) and save it in your `configuration/www` folder.
1. Go to `Configuration > Lovelace dashboard > Resources` in Home Assistant and click on `Add resource`.
    1. Add `/local/community/sensor-monitor-card/sensor_monitor_card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.

---

## Lovelace Set up


### Using UI

Not yet possible.

### Using YAML

1. You just need to add a new empty card with `type: 'custom:sensor-monitor-card'` to your cards list and any of the config that you will find below if you want to customize more your card.

#### Example of code

```yaml
type: 'custom:sensor-monitor-card'
sensor_1: sensor.your_entity_1
sensor_1_image: https://icons-for-free.com/iconfiles/png/512/freezer+fridge+kitchen+refrigerator+icon-1320183719511250085.png
sensor_1_name: Freezer
sensor_1_unit: °C
sensor_1_setpoint: -18
sensor_1_step: 1
```

---

## Parameters

### Sensors Options

  Here's a list of sensors that may be important to monitor, depending on your specific needs. 

  ***All are optionals but you need to define at least one of theses entities**
  
| Name | Type | Requirement | Description | Default |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | `custom:sensor-monitor-card` ||
| `sensor_1` | string | **Optional*** | The entity that measures your sensor 1. |`none`|
| `sensor_1_name` | String | **Required if sensor_1** | Sensor 1 Unit  |`none`|
| `sensor_1_unit` | String | **Required if sensor_1** | Sensor 1 Unit  |`none`|
| `sensor_1_setpoint` | Number | **Required if sensor_1** | Sensor 1 Set Point |`none`|
| `sensor_1_step` | Number | **Required if sensor_1** | Sensor 1 Step |`none`|

There are 13 additional fully customizable entities from 3 to 15.
Example for sensor 2

| Name | Type | Requirement | Description | Default |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sensor_2` | string | **Optional*** | The entity that measures your sensor 2. |`none`|
| `sensor_2_name` | String | **Required if sensor_2** | Sensor 2 Unit  |`none`|
| `sensor_2_unit` | String | **Required if sensor_2** | Sensor 2 Unit  |`none`|
| `sensor_2_setpoint` | Number | **Required if sensor_2** | Sensor 2 Set Point |`none`|
| `sensor_2_step` | Number | **Required if sensor_2** | Sensor 2 Step |`none`|



### Advanced options

You can go further with the card by modifying the user interface (UI).

#### User eXperience (UX)

| Name | Type | Requirement | Description | Default |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | string | **Optional** | Monitor Card Title |`none`|
| `compact` | boolean | **Optional** | Compact Mode |`false`|
| `show_names` | boolean | **Optional** | Display the name of the entity  |`true`|
| `show_labels` | boolean | **Optional** | Display the state qualification (Low, Ideal, High)  |`true`|
| `show_last_updated` | boolean | **Optional** | Display the last updated sensor relative date [Only for compact = false]  |`false`|
| `language` | string | **Optional** | Interface language (en, fr, es)  |`en`|

Needed to change the unit, setpoint, and steps ? No problem, see additionnal parameters below for each measured entity .



---

## Hardware

Here is a non-exhaustive, non-tested and non-affiliated list of different materials that may capture some information to monitor:

### Predefined

- Hardware for [swimming pool](https://github.com/wilsto/pool-monitor-card#hardware)

### Other 

| Brand | Model  | Sensors | HA Support |
| -------------- |  ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ** In progress |   |  |  |



