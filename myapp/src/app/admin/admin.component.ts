import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  songs: object
  users: object
  constructor(private _http: HttpService) { }

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

}
