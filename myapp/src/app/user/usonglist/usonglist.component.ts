import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usonglist',
  templateUrl: './usonglist.component.html',
  styleUrls: ['./usonglist.component.css']
})
export class UsonglistComponent implements OnInit {

  songs:object

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    });
  }

  songdetfun(value: any) {
    this.router.navigate(['details'], { relativeTo: this.route })
    //   this.router.navigate(['review'])

  }

}
