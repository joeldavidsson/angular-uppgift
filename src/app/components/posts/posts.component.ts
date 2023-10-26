import { Component } from '@angular/core';
import { BlogPostModel } from 'src/app/blog-post-model';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
    newBlogPost: BlogPostModel = new BlogPostModel();
    constructor(private blogService: BlogserviceService) { }
    onSubmit() {
        this.newBlogPost.title = 'Ny titel';
        this.newBlogPost.thumbnailUrl = 'Ny bild-url';
        this.newBlogPost.body = 'Nytt innehåll';
        this.newBlogPost.creationDate = new Date();
        this.newBlogPost.likes = 0;
        this.newBlogPost.dislikes = 0;
        this.newBlogPost.comments = [];
        this.blogService.createBlogPost(this.newBlogPost);
        this.newBlogPost = new BlogPostModel();
    }
}
