import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-gsongdetails',
  templateUrl: './gsongdetails.component.html',
  styleUrls: ['./gsongdetails.component.css']
})
export class GsongdetailsComponent implements OnInit {

  reviews: object
  songs: object

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getreview().subscribe(data => {
      this.reviews = data
      console.log(this.reviews);
    }); 
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);  
    });
  }

}
