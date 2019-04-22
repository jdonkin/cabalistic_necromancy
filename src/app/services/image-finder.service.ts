import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class ImageFinderService{
    imageBase:string = "../assets/images/";

    getImageString(value:string):string{
        return `${this.imageBase}/${value}.png`;
    }
}