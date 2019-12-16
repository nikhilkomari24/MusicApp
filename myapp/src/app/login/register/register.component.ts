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
    if (this.validateusername(form.value.username)){
      if(this.validatemail(form.value.email)){
        if (form.value.password != ""){
          this._http.postuser(form.value).subscribe(data=>{
            console.log(data)
            localStorage.setItem('KEY', data["WWW-Authenticate"])
            this.router.navigate(['verification'])
            // this.router.navigate(['user'])
            alert('User registered');
          });  
        }else{alert('Please enter password')}
        
      }          
    }
    
    
  }

  validatemail(email: any) {
    if (Boolean(email)) {
      var re = /^([a-zA-Z])+([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.+?(com|co|ca|in|org|net|edu|info|gov|vekomy))\.?(com|co|in|org|net|edu|info|gov)?$/
      if (!re.test(email)) {
        alert("Please enter Valid Email")
      } else { return true }
    }
    else {
      alert("Please enter Valid Email")
    }
  }

  validateusername(name: any) {
    if (Boolean(name)) {
      if (String(name).length < 0 || String(name).length > 20) {
        alert('Username can be maximum of 20 characters')
      }
      var letter = /^([a-zA-Z]+\s)*[a-zA-Z]+$/
      if (!name.match(letter)) {
        alert('Please enter valid username without spaces')
      }else{return true}
    }
    else {
      alert('Please enter valid username')
    }
  }

  back(){
    this.router.navigate(['login'])
  }

}
