import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public setData(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  
  public getData(key: string): void {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

}
