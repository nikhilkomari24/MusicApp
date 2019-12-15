import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  httpnoun = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getsong() {
    return this.http.get(this.httpnoun+'/open/songlist')
  }

  getsongdata(value:any) {
    console.log('value:',value)
    return this.http.get(this.httpnoun+'/open/songdata/'+ value)
  }

  getreview(value:any) {
    console.log('song id value',value)
    return this.http.get(this.httpnoun+'/open/songreview/'+ value)
  }

  getuserlist() {
    return this.http.get(this.httpnoun+'/admin/userlist')
  }

  getadminsong() {
    return this.http.get(this.httpnoun+'/admin/songlist')
  }

  getsearchsong(value:any) {
    console.log('value:',value)
    return this.http.get(this.httpnoun+'/open/searchsong/'+ value)
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
    return this.http.post(this.httpnoun+'/user/signup', JSON.stringify({
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
    return this.http.post(this.httpnoun+'/user/login', JSON.stringify({
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

  uaddsong(value: { title: any; artist: any; album: any; year: any; genre: any }) {
    console.log(value.title)
    console.log(value.artist)
    console.log(value.album)
    // console.log(JSON.stringify({
    //   username: value.username,
    //   email:value.email,
    //   password: value.password
    // }))
    return this.http.post(this.httpnoun+'/secure/addsong', JSON.stringify({
      Title: value.title,
      Artist:value.artist,
      Album: value.album,
      Ratings: 3,
      Duration: 3,
      Year: value.year,
      Genre: value.genre,
      Comment: "",
      Hidden: false,
      Picture: ""
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }

  uaddreview(value: { song: any; review: any; reviewby: any; rating: any }) {
    return this.http.post(this.httpnoun+'/secure/addreview', JSON.stringify({
      songid: '5dd86347444eb93620d35f08',
      song:value.song,
      review: value.review,
      reviewby: value.reviewby,
      rating: value.rating
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }

  updatehidden(checked: any, songID: any) {
    console.log(checked)
    console.log(songID)

    return this.http.put(this.httpnoun+'/admin/hidesong', JSON.stringify({
      hidden: checked,
      songid: songID   

    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }

  updateuserstatus(checked: any, userID: any) {
    console.log(checked)
    console.log(userID)
    
    return this.http.put(this.httpnoun+'/admin/edituserstatus', JSON.stringify({
      status: checked,
      userid: userID   

    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }

  updateusertype(checked: any, userID: any) {
    console.log(checked)
    console.log(userID)
    
    return this.http.put(this.httpnoun+'/admin/editusertype', JSON.stringify({
      usertype: checked,
      userid: userID   

    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    });
  }
  
}
