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


  public getData(key: string): object | null {
    const data = localStorage.getItem(key);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error('Error parsing data:', error);
        return null;
      }
    }
    return null;
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

}
