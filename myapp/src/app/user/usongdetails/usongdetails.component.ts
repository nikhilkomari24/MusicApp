import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-usongdetails',
  templateUrl: './usongdetails.component.html',
  styleUrls: ['./usongdetails.component.css']
})
export class UsongdetailsComponent implements OnInit {

  reviews: object

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getreview().subscribe(data => {
      this.reviews = data
      console.log(this.reviews);
    }); 
  }

}
