import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  registerUser(payload:any){
    return this.http.post(this.apiUrl + "users" , payload).pipe(map(response => { 
      return response;
    }))
}
}
