import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-usongdetails',
  templateUrl: './usongdetails.component.html',
  styleUrls: ['./usongdetails.component.css']
})
export class UsongdetailsComponent implements OnInit {

  details: object
  songs:object

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    });
    
    // this._http.getreview().subscribe(data => {
    //   this.details = data
    //   console.log(this.details);
    // }); 
  }

}
