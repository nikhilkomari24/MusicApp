import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uaddsong',
  templateUrl: './uaddsong.component.html',
  styleUrls: ['./uaddsong.component.css']
})
export class UaddsongComponent implements OnInit {

  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.uaddsong(form.value).subscribe(data=>{
      console.log(data)
      alert('song added');
      this.router.navigate(['user'])
    });
    
  }

}
