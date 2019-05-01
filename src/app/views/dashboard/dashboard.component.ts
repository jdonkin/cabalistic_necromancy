import { Component, OnInit } from '@angular/core';
import { ThoughtModel } from 'src/app/models/thought.model';
import { ApiService } from 'src/app/services/api.service';
import { ImageFinderService } from 'src/app/services/image-finder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  thought:ThoughtModel;
  personImage:string;
  defaultPersonImage:string;
  showLoading:boolean;

  constructor(private _api:ApiService, private _imageService:ImageFinderService, private _router:Router){ }

  ngOnInit(){
    const home:string = 'home';
    this.showLoading = false;
    this.thought = new ThoughtModel();
    this.defaultPersonImage = this._imageService.getImageString('');
    if(this._router.url.includes(home)){
      this.readMind();
    }
  }

  readMind(){
    this.showLoading = true;
    this._api.getThought().subscribe(
      (data:ThoughtModel)=>{
        this.thought = data;
        this.personImage = this._imageService.getImageString(this.thought.name);
        this.showLoading = false;
      }
    );
  }

}
