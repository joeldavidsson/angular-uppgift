import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { BlogserviceService } from './services/blogservice.service';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        PostsComponent,
        PostListComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [BlogserviceService],
    bootstrap: [AppComponent],
})
export class AppModule {}
