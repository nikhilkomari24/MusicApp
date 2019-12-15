import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-usonglist',
  templateUrl: './usonglist.component.html',
  styleUrls: ['./usonglist.component.css']
})

export class UsonglistComponent implements OnInit {

  global:any

  songs:object
  details:object
  reviews:object

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._http.getusong().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    });
  }

  songdetfun(value: any) {
    console.log('song det value',value.srcElement.id)
    this._http.getusongdata(value.srcElement.id).subscribe(data => {
      this.details = data
      this.global= value.srcElement.id
      console.log(this.details);
      console.log(this.global)
    });

  }

  onSubmit(form: NgForm) {
    console.log('form value', form.value)
    if (form.value.song == "" || form.value.song == null) {
      this.ngOnInit()
    } else {
      console.log("onsubmit")
      this._http.getsearchsong(form.value.search).subscribe(data => {
        this.songs = data
        console.log(data)
        form.reset();
      });
    }
    form.reset();

  }

  onClick(form: NgForm) {
    console.log("onclick")
    console.log('this.global',this.global)
    this._http.uaddreview(form.value,this.global).subscribe(data=>{
      console.log(data)
      alert('Review added');
      form.reset();
      this.router.navigate(['user'])
    });
  }

  songreview(value: any) {
    console.log('song review value',value)
    this._http.getureview(value.srcElement.id).subscribe(data => {
      this.reviews = data
      console.log(this.reviews);
    });

  }
  
  back(){
    this.router.navigate(['login'])
    localStorage.setItem('KEY', "")
  }

  

}
