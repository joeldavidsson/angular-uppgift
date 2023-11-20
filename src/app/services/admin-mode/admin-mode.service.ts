import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminModeService {

  private isAdminMode = false;

  toggleAdminMode() {
    this.isAdminMode = !this.isAdminMode;
  }

  isAdmin() {
    return this.isAdminMode;
  }
}
