import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  private localStorage(): Storage {
    return getLocalStorage();

    
  }
  subject = new Subject<any>();
  constructor(private localStorageService: LocalStorageService) {
    this.localStorage = localStorageService.localStorage 
  } 

  isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
  
 
  get(key: string) {
    return localStorage && localStorage[key] ? localStorage[key] : '';
  }

 
  set(key: string, value: string) {
    localStorage[key] = value;
    return this;
  }

  
  remove(key: string) {
    delete localStorage[key];
    return this;
  }
  
 } 
 
 function getLocalStorage(): Storage {
  return localStorage;
}
