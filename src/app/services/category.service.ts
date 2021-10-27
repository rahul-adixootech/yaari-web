import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(this.apiUrl + "categories").pipe(map(response => { 
      console.log("getAllCategories");
      return response;
    }))
  }
  // categoriesByCount(){
  //   return this.http.get(this.apiUrl + "categories/count").pipe(map(response => { 
  //     return response;
  //   }))
  // }
  categoriesById(id:any){
    return this.http.get(this.apiUrl + "categories/"+id).pipe(map(response => { 
      console.log("categoriesById");
      return response;
    }))
  }
  // categoriesUpdateById(){
  //   return this.http.patch(this.apiUrl + "categories/"+id).pipe(map(response => { 
  //     return response;
  //   }))
  // }

  // getAllSubCategories(){
  //   return this.http.get(this.apiUrl + "sub-categories").pipe(map(response => { 
  //     return response;
  //   }))
  // }

  // getCategoryByCollectionId(id:number){
  //   return this.http.get(this.apiUrl + "categories/"+id ).pipe(map(response => { 
  //     return response;
  //   }))
  // }
  
}