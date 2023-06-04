
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