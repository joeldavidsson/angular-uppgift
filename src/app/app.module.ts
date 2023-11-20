import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { ionThumbsUpOutline, ionThumbsDownOutline } from '@ng-icons/ionicons';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { BlogserviceService } from './services/blogservice/blogservice.service';
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
        AddPostComponent,
        PostListComponent,
        HomeComponent,
        AboutComponent,
        PostinfoComponent,
        ContactComponent,
        AdminComponent,
        AddCommentComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, NgIconsModule.withIcons({ ionThumbsDownOutline, ionThumbsUpOutline })],
    providers: [BlogserviceService],
    bootstrap: [AppComponent],
})
export class AppModule { }
