import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {

  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.checklogin(form.value).subscribe(data=>{
      localStorage.setItem('KEY', data["WWW-Authenticate"])
      this.router.navigate(['user'])
      alert('User logged in');
    })    
  }

}
