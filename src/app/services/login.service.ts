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
}