import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.postuser(form.value).subscribe(data=>{
      console.log(data)
      this.router.navigate(['user'])
      alert('User registered');
    });
    
  }

}
