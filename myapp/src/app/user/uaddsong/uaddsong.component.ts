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
    console.log("form value add song",form.value.title)
    if (form.value.title == "" || form.value.artist == ""){
      alert('Please enter Title and Artist names')
    }else{
      this._http.uaddsong(form.value).subscribe(data=>{
        console.log("add console",data["message"])
        alert('song added');
        this._http.uaddsreview(form.value,data["message"]).subscribe(data=>{
          console.log(data)
          alert('Review added');
        });
        form.reset();
        this.router.navigate(['user'])
      });
    }
    
    
  }

}
