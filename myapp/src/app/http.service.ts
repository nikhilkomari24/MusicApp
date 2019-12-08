import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getsong() {
    return this.http.get('http://localhost:4000/open/songlist')
  }

  getreview() {
    return this.http.get('http://localhost:4000/open/songreview')
  }

  postuser(value: { username: any; email: any; password: any }) {
    console.log(value.username)
    console.log(value.email)
    console.log(value.password)
    console.log(JSON.stringify({
      username: value.username,
      email:value.email,
      password: value.password
    }))
    return this.http.post('http://localhost:4000/user/signup', JSON.stringify({
      username: value.username,
      email:value.email,
      password: value.password      

    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }

  checklogin(value: { email: any; password: any }) {
    console.log(value.email)
    console.log(value.password)
    console.log(JSON.stringify({
      email:value.email,
      password: value.password
    }))
    return this.http.post('http://localhost:4000/user/login', JSON.stringify({
      email:value.email,
      password: value.password      

    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }
  
}
