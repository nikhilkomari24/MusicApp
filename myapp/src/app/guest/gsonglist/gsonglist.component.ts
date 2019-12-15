import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-gsonglist',
  templateUrl: './gsonglist.component.html',
  styleUrls: ['./gsonglist.component.css']
})
export class GsonglistComponent implements OnInit {

  songs: object
  details:object
  reviews:object

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._http.getsong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    });
  }

  songdetfun(value: any) {
    // this.router.navigate(['review'], { relativeTo: this.route })
    //   this.router.navigate(['review'])
    console.log('song det value',value.srcElement.id)
    this._http.getsongdata(value.srcElement.id).subscribe(data => {
      this.details = data
      console.log(this.details);
    });

  }
  
  songreview(value: any) {
    console.log('song review value',value)
    this._http.getreview(value.srcElement.id).subscribe(data => {
      this.reviews = data
      console.log(this.reviews);
    });

  }

  onSubmit(form: NgForm) {
    console.log('form value', form.value)
    if (form.value.search == "") {
      this.ngOnInit()
    } else {
      console.log("onsubmit")
      this._http.getsearchsong(form.value.search).subscribe(data => {
        this.songs = data
        console.log(data)
      });
    }

  }

  back(){
    this.router.navigate([''])
  }

}
