import { Icon } from './icon.model';

export class Marker {
    icon = {}

    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = new Icon ( './assets/img/gas-24.ico', 24);
            this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = new Icon ('./assets/img/electricity-24.ico', 24);
            this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = new Icon ('./assets/img/flame-24.ico', 24);
            this.label = "";
        }
        if(this.label.includes("Olio combustibile	"))
        {
            this.icon = new Icon ( './assets/img/gas-pump-24.ico', 24);
            this.label = "";
        }
         if(this.label.includes("Gasolio"))
        {
            this.icon = new Icon ('./assets/img/gas-station-24.ico', 24);
            this.label = "";
        }
         if(this.label.includes("Biomasse solide"))
        {
            this.icon = new Icon ('./assets/img/biomass-24.ico', 24);
            this.label = "";
        }
        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = new Icon ('./assets/img/biotech-24.ico', 24);
            this.label = "";
        }
          if(this.label.includes("gassose	"))
        {
            this.icon = new Icon ( './assets/img/flammable-24.ico', 24);
            this.label = "";
        }
         if(this.label.includes("liquide"))
        {
            this.icon = new Icon ( './assets/img/atomic-24.ico', 24);
            this.label = "";
        }
         if(this.label.includes("lRSU per teleriscaldamento"))
        {
            this.icon = new Icon ( './assets/img/gas-24(1).ico', 24);
            this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = new Icon ('./assets/img/question-mark-24.ico', 24);
            this.label = "";
        }
    }
}
