import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

 songs:object

 constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
  });
 }
}









