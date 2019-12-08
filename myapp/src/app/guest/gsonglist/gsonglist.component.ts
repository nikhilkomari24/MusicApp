import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-gsonglist',
  templateUrl: './gsonglist.component.html',
  styleUrls: ['./gsonglist.component.css']
})
export class GsonglistComponent implements OnInit {

  songs:object

  constructor(private _http: HttpService,  private router: Router) { }

  ngOnInit() {
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
  });
  }

}
