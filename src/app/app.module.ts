import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { BlogserviceService } from './services/blogservice.service';
import { HomeComponent } from './views/home/home/home.component';
import { AboutComponent } from './views/about/about/about.component';
import { PostinfoComponent } from './views/postinfo/postinfo/postinfo.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { AdminComponent } from './views/admin/admin/admin.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        PostsComponent,
        PostListComponent,
        HomeComponent,
        AboutComponent,
        PostinfoComponent,
        ContactComponent,
        AdminComponent,
        AddCommentComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [BlogserviceService],
    bootstrap: [AppComponent],
})
export class AppModule {}
