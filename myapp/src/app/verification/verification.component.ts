import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private _http: HttpService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  verify(){
    this.router.navigate(['user'])
  }

}
