
!import[/readme/en_header.md] 

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

!import[/readme/en_description.md] 

---

## Support

Hey dude! Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://bmc.link/wilsto)

---

## Install

!import[/readme/en_install.md] 

---

## Lovelace Set up

!import[/readme/en_lovelace.md] 

---

## Parameters

### Sensors Options

!import[/readme/en_sensors.md] 

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

!import[/readme/en_advanced_options.md] 

---

## Hardware

!import[/readme/en_hardware.md] 

!export[/README.md] 