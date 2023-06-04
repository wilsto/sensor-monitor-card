import { html } from 'lit';

class cardContent {
  static generateTitle(config) {
    const title = config.title !== undefined ? html`
        <h1 class="sensor-monitor-title">${config.title}</h1>
      ` : html``;
    return html`
      ${title}
    `;
  }

  static generateBody(data) {
    return html`
    <!-- ##### ${data.name} section ##### -->    
    <div class="section" @click=${() => cardContent._moreinfo(data.entity)}>   
      <div class="sensor-monitor-container-marker" >
        <div class="marker" style="background-color: ${data.color} ;color: black;left: ${data.pct - 5}%;">${data.value}</div>
        <div class="marker-state" style="padding-${data.side_align}:40px;text-align:${data.side_align};background-color:transparent ;${data.side_align}: ${data.pct_state_step}%;">${data.state}</div>
        <div class="triangle" style="border-top: 10px solid ${data.color} ;left: ${data.pct - 1}%;"></div>
      </div>
      <div class="sensor-monitor-entity-img"><img style="width:32px;height:32px" src="${data.image}"></div>
      <div class="sensor-monitor-container">
        <div style="background-color: transparent; grid-column: 1 ; border: 0px; box-shadow:none" class="grid-item item-row"> <div style="font-size: 0.8em;color:lightgrey;text-align:left;margin:3px 2px 0 0 ">${data.unit}</div></div>
        <div style="background-color: #e17055; grid-column: 2 ; border-radius: 5px 0px 0px 5px" class="grid-item item-row"> </div>
        <div style="background-color: #fdcb6e; grid-column: 3 ;" class="grid-item item-row"></div>
        <div style="background-color: #00b894; grid-column: 4 ;" class="grid-item item-row"></div>  
        <div style="background-color: #00b894; grid-column: 5 ;" class="grid-item item-row"></div>  
        <div style="background-color: #fdcb6e; grid-column: 6 ;" class="grid-item item-row"></div>
        <div style="background-color: #e17055; grid-column: 7 ; border-radius: 0px 5px 5px 0px;" class="grid-item item-row"></div>
      </div>
      <div class="sensor-monitor-container-values">
        <div style="background-color: transparent; grid-column: 2 ; border-radius: 5px 0px 0px 5px" class="grid-item item-row"> <div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[0]}</div></div>
        <div style="background-color: transparent; grid-column: 3 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[1]}</div></div>
        <div style="background-color: transparent; grid-column: 4 ;" class="grid-item item-row"><div style="font-size: 0.8em;color:#00b894;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[2]}</div></div>  
        <div style="background-color: transparent; grid-column: 5 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[3]}</div></div>  
        <div style="background-color: transparent; grid-column: 6 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[4]}</div></div>
        <div style="background-color: transparent; grid-column: 7 ; border-radius: 0px 5px 5px 0px;" class="grid-item item-row"></div>
      </div> 
    </div> 
    <div style="position: relative;top:-25px;margin-bottom:-25px;text-align:left;left:15px;">${data.title}<br/><small style="position: relative;top:-5px;font-size:9px;color:lightgrey">${data.last_updated}</small></div>

    `;
  }

  static generateCompactBody(data) {
    return html`
    <!-- ##### ${data.name} section ##### -->    
    <div class="section-compact"  @click=${() => cardContent._moreinfo(data.entity)}>   
      <div class="sensor-monitor-entity-img"><img style="width:32px;height:32px" src="${data.image}"></div>
      <div class="sensor-monitor-container">
        <div style="background-color: transparent; grid-column: 1 ; border: 0px; box-shadow:none" class="grid-item item-row"> <div style="font-size: 0.8em;color:lightgrey;text-align:left;margin:3px 2px 0 0 ">${data.unit}</div></div>
        <div style="background-color: #e17055; grid-column: 2 ; border-radius: 5px 0px 0px 5px" class="grid-item item-row"> </div>
        <div style="background-color: #fdcb6e; grid-column: 3 ;" class="grid-item item-row"></div>
        <div style="background-color: #00b894; grid-column: 4 ;" class="grid-item item-row"></div>  
        <div class="cursor-text" style="border-${data.side_align}: 5px solid black; text-align:${data.side_align};background-color:transparent ;${data.side_align}: ${data.pct_cursor}%;">${data.value} ${data.separator} ${data.state}</div>
        <div style="background-color: #00b894; grid-column: 5 ;" class="grid-item item-row"></div>  
        <div style="background-color: #fdcb6e; grid-column: 6 ;" class="grid-item item-row"></div>
        <div style="background-color: #e17055; grid-column: 7 ; border-radius: 0px 5px 5px 0px;" class="grid-item item-row"></div>
      </div>
      <div class="sensor-monitor-container-values">
        <div style="background-color: transparent; grid-column: 2 ; border-radius: 5px 0px 0px 5px" class="grid-item item-row"> <div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[0]}</div></div>
        <div style="background-color: transparent; grid-column: 3 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[1]}</div></div>
        <div style="background-color: transparent; grid-column: 4 ;" class="grid-item item-row"><div style="font-size: 0.8em;color:#00b894;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[2]}</div></div>  
        <div style="background-color: transparent; grid-column: 5 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[3]}</div></div>  
        <div style="background-color: transparent; grid-column: 6 ;" class="grid-item item-row"><div style="font-size: 0.8em;text-align:right;margin:-5px 2px 0 0 ">${data.setpoint_class[4]}</div></div>
        <div style="background-color: transparent; grid-column: 7 ; border-radius: 0px 5px 5px 0px;" class="grid-item item-row"></div>
      </div> 
    </div> 
    <div style="position: relative;margin-top:-30px;text-align:left;left:-30px;font-size:9px;padding-bottom: 5px;">${data.title}</div>

    `;
  }

  static _moreinfo(entityinfo) {
    const popupEvent = new Event("hass-more-info", {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
    popupEvent.detail = { entityId: entityinfo };
    document.querySelector("home-assistant").dispatchEvent(popupEvent);
  }
}

export default cardContent;
