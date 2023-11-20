import { Component } from '@angular/core';
import { BlogPostModel } from 'src/app/utils/classes/blog-post-model';
import { BlogserviceService } from 'src/app/services/blogservice/blogservice.service';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
    newBlogPost: BlogPostModel = new BlogPostModel('', '', '', new Date(), 0, 0, []);

    constructor(
        private blogService: BlogserviceService
    ) { }

    onSubmit() {

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
