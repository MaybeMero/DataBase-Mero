export class Marker {
    icon = {}

    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = { url: './assets/img/gas-24.ico' };
            this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/electricity-24.ico' };
            this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = { url: './assets/img/flame-24.ico' };
            this.label = "";
        }
        if(this.label.includes("Olio combustibile	"))
        {
            this.icon = { url: './assets/img/gas-pump-24.ico' };
            this.label = "";
        }
         if(this.label.includes("Gasolio"))
        {
            this.icon = { url: './assets/img/gas-station-24.ico' };
            this.label = "";
        }
         if(this.label.includes("Biomasse solide"))
        {
            this.icon = { url: './assets/img/biomass-24.ico' };
            this.label = "";
        }
        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = { url: './assets/img/biotech-24.ico' };
            this.label = "";
        }
          if(this.label.includes("gassose	"))
        {
            this.icon = { url: './assets/img/flammable-24.ico' };
            this.label = "";
        }
         if(this.label.includes("liquide"))
        {
            this.icon = { url: './assets/img/atomic-24.ico' };
            this.label = "";
        }
         if(this.label.includes("lRSU per teleriscaldamento"))
        {
            this.icon = { url: './assets/img/gas-24(1).ico' };
            this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = { url: './assets/img/question-mark-24.ico'};
            this.label = "";
        }
    }
}
