import { Component } from '@angular/core';
import { AdminModeService } from 'src/app/services/admin-mode/admin-mode.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {


    constructor(public adminModeService: AdminModeService) { }

    toggleAdminMode() {
        this.adminModeService.toggleAdminMode();
    }
}
