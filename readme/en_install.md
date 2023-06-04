
#### via HACS

Until the Home Assistant sensor Monitor card is available by default in the HACS directory, click on:
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=wilsto&repository=sensor-monitor-card&category=plugin)

#### Manualy

1. Download the `sensor_monitor_card.js` file from the [latest release available](https://github.com/wilsto/sensor-monitor-card/releases) and save it in your `configuration/www` folder.
1. Go to `Configuration > Lovelace dashboard > Resources` in Home Assistant and click on `Add resource`.
    1. Add `/local/community/sensor-monitor-card/sensor_monitor_card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.