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

