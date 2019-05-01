import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class ImageFinderService{
    private imageBase:string = "../assets/images/";

    getImageString(value:string):string{
        let image =  `${this.imageBase}${value}.png`;
        if (image === `${this.imageBase}.png`){
            return `${this.imageBase}someAssembly.png`
        }
        return image;
    }
}