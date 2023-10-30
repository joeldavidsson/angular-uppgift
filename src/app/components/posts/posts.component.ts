import { Component } from '@angular/core';
import { BlogPostModel } from 'src/app/blog-post-model';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
    newBlogPost: BlogPostModel = new BlogPostModel('', '', '', new Date(), 0, 0, []);

    constructor(
        private blogService: BlogserviceService
    ) { }

    onSubmit() {
        // Skapa en ny instans av BlogPostModel med användarens inmatning
        const newBlogPost = new BlogPostModel(
            this.newBlogPost.title,
            this.newBlogPost.thumbnailUrl,
            this.newBlogPost.body,
            this.newBlogPost.creationDate,
            this.newBlogPost.likes,
            this.newBlogPost.dislikes,
            this.newBlogPost.comments,
        );

        this.blogService.createBlogPost(newBlogPost);
        this.newBlogPost = new BlogPostModel('', '', '', new Date(), 0, 0, []);
    }
}
