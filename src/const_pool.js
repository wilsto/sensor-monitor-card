export const sensors_pool = [
  {
    id: "temperature",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/temperature.png?raw=true",
    unit: "°C",
    setpoint: "27",
    step: "1",
    override: "28.5",
  },
  {
    id: "temperature_2",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/temperature.png?raw=true",
    unit: "°C",
    setpoint: "27",
    step: "1",
    override: "26.25",
  },
  {
    id: "ph",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/ph.png?raw=true",
    unit: "°C",
    setpoint: "7.2",
    step: "0.2",
    override: "6.5",
  },
  {
    id: "orp",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/orp.png?raw=true",
    unit: "mV",
    setpoint: "700",
    step: "50",
    override: "578.5",
  },
  {
    id: "tds",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/tds.png?raw=true",
    unit: "g/L",
    setpoint: "4",
    step: "1",
    override: "2.5",
  },
  {
    id: "salinity",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/salinity.png?raw=true",
    unit: "ppm",
    setpoint: "3000",
    step: "500",
    override: "2850",
  },
  {
    id: "cya",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/cya.png?raw=true",
    unit: "ppm",
    setpoint: "40",
    step: "10",
    override: "28.5",
  },
  {
    id: "calcium",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/calcium.png?raw=true",
    unit: "ppm",
    setpoint: "300",
    step: "100",
    override: "285",
  },
  {
    id: "phosphate",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/phosphate.png?raw=true",
    unit: "ppb",
    setpoint: "100",
    step: "100",
    override: "285",
  },
  {
    id: "alkalinity",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/alkalinity.png?raw=true",
    unit: "ppm",
    setpoint: "100",
    step: "20",
    override: "28.5",
  },
  {
    id: "free_chlorine",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/free_chlorine.png?raw=true",
    unit: "ppm",
    setpoint: "2",
    step: "1",
    override: "2.85",
  },
  {
    id: "total_chlorine",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/total_chlorine.png?raw=true",
    unit: "ppm",
    setpoint: "3",
    step: "1",
    override: "2.85",
  },
  {
    id: "pressure",
    image:
      "https://github.com/wilsto/pool-monitor-card/blob/master/resources/pressure.png?raw=true",
    unit: "psi",
    setpoint: "20",
    step: "10",
    override: "28.5",
  },      
];

export const sensor_translations = {
  en: {
    sensor: {
      temperature: "Temperature",
      temperature_2: "Temperature 2",
      ph: "pH",
      orp: "ORP",
      tds: "TDS",
      salinity: "Salinity",
      cya: "Cyanuric Acid",
      calcium: "Calcium",
      phosphate: "Phosphate",
      alkalinity: "Alkalinity",
      free_chlorine: "Free Chlorine",
      total_chlorine: "Total Chlorine",
      pressure: "Filter Pressure",
    },
  },
  fr: {
    sensor: {
      temperature: "Température",
      temperature_2: "Température 2",
      ph: "pH",
      orp: "ORP",
      tds: "TDS",
      salinity: "Salinité",
      cya: "Acide cyanurique",
      calcium: "Calcium",
      phosphate: "Phosphate",
      alkalinity: "Alcalinité",
      free_chlorine: "Chlore libre",
      total_chlorine: "Chlore total",
      pressure: "Pression du filtre",
    },
  },
  es: {
    sensor: {
      temperature: "Temperatura",
      temperature_2: "Temperatura 2",
      ph: "pH",
      orp: "ORP",
      tds: "TDS",
      salinity: "Salinidad",
      cya: "Acido cianúrico",
      calcium: "Calcio",
      phosphate: "Fosfato",
      alkalinity: "Alcalinidad",
      free_chlorine: "Cloro libre",
      total_chlorine: "Cloro total",
      pressure: "Presión del filtro",
    },
  },
};