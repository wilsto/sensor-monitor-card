import { css } from 'lit';

const style = css`
  :host {
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    border-width: var(--ha-card-border-width,4px);
    box-shadow: var(
      --ha-card-box-shadow
    );
    color: var(--primary-text-color);
    display: block;
    transition: all 0.3s ease-out 0s;
    position: relative;
    padding-top: 25px;
  }

  .section{
    padding-bottom:10px;
  }

  .sensor-monitor-title{
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 15px;
    padding-bottom: 15px;
    margin: 0;
  }

  .sensor-monitor-entity-img {
    text-align:right;
    width:10%;
    float:left;
  }
  .sensor-monitor-container {
    display: grid;
    grid-template-columns: 10% repeat(6, 1fr) 5%;
    padding: 5px;
  }

  .sensor-monitor-container-values {
    display: grid;
    grid-template-columns:12% repeat(6, 1fr) 2% ;
    padding: 5px;
  }

  .sensor-monitor-container-marker {
    display: grid;
    grid-template-columns: 10% repeat(6, 1fr) 5%;
    padding: 10px;
    grid-template-rows:15px;
    line-height: 15px;
    position: relative;
  }

  .sensor-monitor-container-marker .marker {
    text-align: center;
    justify-self: center;
    width: 40px;
    height:20px;
    padding-top:5px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
  }

  .sensor-monitor-container-marker .marker-state {
    width: 60px;
    position: absolute;
    z-index: 1;
  }

  .sensor-monitor-container-marker .triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    bottom: 0px;
    transform: translateX(-50%);
  }

  .grid-item {
    padding-top: 150%;
    padding-bottom: 20%;
    padding: 0;
  }

  .grid-item-text-box {
    font-size: 0.8em;
    text-align: center;
    font-weight: 700;
  }

  .item-row {
    grid-row: 1;
  }

  .cursor{
    text-align: center;
    justify-self: center;
    font-size:20px;
    font-weight: 900;
    color: black;
    position: absolute;
    z-index: 1;
  }
  .cursor-text{
    width: 150px;
    height: 22px;
    padding-left: 3px;
    padding-right: 3px;
    padding-top:2px;
    font-size: 12px;
    font-weight: 700;
    text-align: right;
    color: black;
    justify-self: right;
    position: absolute;
    z-index: 1;
  }
`;

export default style;
