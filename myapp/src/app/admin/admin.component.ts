import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  songs: object
  users: object
  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._http.getadminsong().subscribe(data => {
      this.songs = data["list"]
      console.log(this.songs);
    });

    this._http.getuserlist().subscribe(data => {
      data["list"].forEach(s => {
        if (s.usertype == "SM") {
          s.SM = true
        }
        else {
          s.SM = false
        }
      });
      this.users = data["list"]
      console.log('USERS', this.users);

    });
  }

  songdelfun(value: any) {
    console.log('song det value',value.srcElement.id)
    this._http.delsong(value.srcElement.id).subscribe(data => {
      console.log(data)
      alert('song deleted');
      this.ngOnInit();
    });

  }
  
  onSubmit(form: NgForm) {
    console.log("form value add song",form.value.title)
    if (form.value.title == "" || form.value.artist == ""){
      alert('Please enter Title and Artist names')
    }else{
      this._http.aaddsong(form.value).subscribe(data=>{
        console.log(data)
        alert('song added');
        this.router.navigate(['admin'])
        form.reset();
        this.ngOnInit();
      });
    }
    
    
  }

  toggleSong(value: any) {
    //console.log(value)
    var checked = value.srcElement.checked
    var songID = value.srcElement.id
    console.log(checked)
    console.log(songID)
    this._http.updatehidden(checked, songID).subscribe(data => {
      console.log(data)
      // this.router.navigate(['user'])
      this.ngOnInit();
    });
    
  }

  toggleUser(value: any) {
    //console.log(value)
    var checked = value.srcElement.checked
    var userID = value.srcElement.id
    console.log(checked)
    console.log(userID)
    this._http.updateuserstatus(checked, userID).subscribe(data => {
      console.log(data)
      // this.router.navigate(['user'])
      this.ngOnInit();
    });

  }

  toggleSM(value: any) {
    //console.log(value)
    var checked = value.srcElement.checked
    var userID = value.srcElement.id
    console.log(checked)
    console.log(userID)
    this._http.updateusertype(checked, userID).subscribe(data => {
      console.log(data)
      // this.router.navigate(['user'])
      this.ngOnInit();
    });

  }

  back(){
    this.router.navigate(['login'])
    localStorage.setItem('KEY', "")
  }

}
