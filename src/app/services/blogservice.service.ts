import { Injectable } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Injectable({
    providedIn: 'root',
})
export class BlogserviceService {
    private blogPosts: BlogPostModel[] = [];

    createBlogPost(blogPost: BlogPostModel): void {
        this.blogPosts.push(blogPost);
        this.blogPosts.push(new BlogPostModel());
    }
    getBlogPosts(): BlogPostModel[] {
        return this.blogPosts;
    }
}
