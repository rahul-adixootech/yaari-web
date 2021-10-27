import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  loginUser(payload:any){
    return this.http.post(this.apiUrl + "auth/login/email" , payload).pipe(map(response => { 
      return response;
    }))
}
  mobileCheck(payload:any){
    return this.http.post(this.apiUrl + 'auth/generate-otp',payload).pipe(map(response =>{
      return response;
    }))
  }

  otpCheck(payload:any){
    console.log(payload)
    return this.http.post(this.apiUrl+"auth/login/mobile",payload).pipe(map(response =>{
      return response;
    }))
  }
  
  passwordCheck(id:any,payload:any){
    return this.http.patch(this.apiUrl + 'users/'+id,payload).pipe(map(response =>{
      return response;
    }))
  }

}