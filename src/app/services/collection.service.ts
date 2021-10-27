import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllCollection(){
    return this.http.get(this.apiUrl + "collections" ).pipe(map(response => { 
      console.log(" get all collection");
      return response;
    }))
  }

  collectionById(id:any){
    return this.http.get(this.apiUrl + "collections/"+id).pipe(map(response => { 
      return response;
    }))
  }
// collectionByCount(){
  //   return this.http.get(this.apiUrl + "collections/count").pipe(map(response => { 
  //     return response;
  //   }))
  // }

  // collectionUpdateById(id:any){
  //   return this.http.patch(this.apiUrl + "collections/"+id).pipe(map(response => { 
  //     return response;
  //   }))
  // }
 

}