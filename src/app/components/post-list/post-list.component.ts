import { Component } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';
import { BlogPostModel } from 'src/app/blog-post-model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
    blogPosts: BlogPostModel[] = [];

    constructor(private blogService: BlogserviceService) {
        this.blogPosts = this.blogService.getBlogPosts(); // Hämta blogginläggen från tjänsten
    }
}
