import { Component, OnInit } from '@angular/core';
import { ThoughtModel } from 'src/app/models/thought.model';
import { ApiService } from 'src/app/services/api.service';
import { ImageFinderService } from 'src/app/services/image-finder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  thought:ThoughtModel;
  personImage:string;
  showLoading:boolean;

  constructor(private _api:ApiService, private _imageService:ImageFinderService){ }

  ngOnInit(){
    this.showLoading = false;
    this.thought = new ThoughtModel();
  }

  readMind(){
    this.showLoading = true;
    this._api.getThought().subscribe(
      (data:ThoughtModel)=>{
        this.thought = data;
        console.log(this.thought);
        this.personImage = this._imageService.getImageString(this.thought.name);
        this.showLoading = false;
      }
    );
  }

}
