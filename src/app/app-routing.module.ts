import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about/about.component';
import { HomeComponent } from './views/home/home/home.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { PostinfoComponent } from './views/postinfo/postinfo/postinfo.component';
import { AdminComponent } from './views/admin/admin/admin.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'post/:title', component: PostinfoComponent },
    { path: 'admin', component: AdminComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
