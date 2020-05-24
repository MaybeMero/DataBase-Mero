export class Icon { //creo  la clase icon
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    setSize(size: number) { //Serve a impostare la dimensione 
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { //creo la classe scaledsize
    constructor(
    public width:  number,
    public height: number){}
}