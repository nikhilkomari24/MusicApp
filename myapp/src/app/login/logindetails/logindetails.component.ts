import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("login", form.value.email)
    if (this.validatemail(form.value.email)) {
      if (form.value.password != "") {
        this._http.checklogin(form.value).subscribe(data => {
          console.log('key',data["WWW-Authenticate"])
          localStorage.setItem('KEY', data["WWW-Authenticate"])
          if (data['statusCode'] == 200 && data['result']['userType'] == 'user') {
            this.router.navigate(['user'])
            alert('User logged in');
            
          } else if (data['statusCode'] == 200 && data['result']['userType'] == 'SM') {
            this.router.navigate(['admin'])
            alert('Logged in as Admin');
          } else if (data['statusCode'] == 400) {
            alert('Account deactivated, please contact admin')
          } else if (data['statusCode'] == 404) {
            alert('Please enter valid username/password')
          } else {
            alert('Please enter valid username/password')
          }

        })
      }else{alert('Please enter password')}
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

  back(){
    this.router.navigate([''])
  }

}
