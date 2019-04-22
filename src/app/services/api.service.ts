import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ThoughtModel } from "../models/thought.model";

@Injectable({
    providedIn: "root"
})

export class ApiService{

    apiRoute:string = "http://localhost:50975/api";
    
    constructor(private _client: HttpClient){}

    public getThought(){
        return this._client.get<ThoughtModel>(`${this.apiRoute}/thoughts`);
    }

}