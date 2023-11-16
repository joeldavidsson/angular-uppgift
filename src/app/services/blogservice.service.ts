import { Injectable } from '@angular/core';
import { BlogPostModel } from '../utils/blog-post-model';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BlogserviceService {
    private blogPosts: BlogPostModel[] = [];
    private blogPostsSubject: BehaviorSubject<BlogPostModel[]> = new BehaviorSubject<BlogPostModel[]>([]);

    constructor(private storageService: StorageService) {
        const savedData = this.storageService.getData('myPosts');
        if (Array.isArray(savedData) && savedData.length > 0) {
            this.blogPosts = savedData;
        } else {
            this.blogPosts = [];
            this.saveBlogPostsToLocalStorage();
        }
        this.blogPostsSubject.next(this.blogPosts);
    }

    createBlogPost(blogPost: BlogPostModel): void {
        this.blogPosts.push(blogPost);
        this.saveBlogPostsToLocalStorage();
        this.blogPostsSubject.next(this.blogPosts);
    }

    addCommentToBlogPost(post: BlogPostModel, comment: string): void {
        post.comments.push(comment);
        this.saveBlogPostsToLocalStorage();
    }

    removeBlogPost(title: string): void {
        const index = this.blogPosts.findIndex((post) => post.title === title);

        if (index !== -1) {
            this.blogPosts.splice(index, 1);
            this.saveBlogPostsToLocalStorage();
        }
    }

    getBlogPosts(): BlogPostModel[] {
        return this.blogPosts;
    }

    getBlogPostByTitle(title: string): BlogPostModel | undefined {
        return this.blogPosts.find((post) => post.title === title);
    }

    getBlogPostsObservable(): BehaviorSubject<BlogPostModel[]> {
        return this.blogPostsSubject;
    }

    saveBlogPostsToLocalStorage(): void {
        this.storageService.setData('myPosts', this.blogPosts);
    }
}
