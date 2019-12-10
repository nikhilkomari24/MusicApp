import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uaddreview',
  templateUrl: './uaddreview.component.html',
  styleUrls: ['./uaddreview.component.css']
})
export class UaddreviewComponent implements OnInit {

  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.uaddreview(form.value).subscribe(data=>{
      console.log(data)
      alert('Review added');
      this.router.navigate(['user'])
    });
  }
}
