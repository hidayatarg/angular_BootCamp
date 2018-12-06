export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    /**
    Instanciate with new keys
     */
    constructor( name: string, desc: string, imagePath:string) {
        // Refer to the name above
        this.name = name,
        this.description = desc;
        this.imagePath = imagePath;
    }
}