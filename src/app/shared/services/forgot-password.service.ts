import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  generateOtp(payload){
    console.log(payload);
    console.log("service");
    return this.http.post(this.apiUrl + "auth/generate-otp" , payload).pipe(map(response => {
      console.log(response)    
      return response;
    }))
  }

  verifyOtp(payload){
    console.log(payload);
    console.log("service");
    return this.http.post(this.apiUrl + "auth/login/mobile" , payload).pipe(map(response => {
      console.log(response)    
      return response;
    }))
  }
}
