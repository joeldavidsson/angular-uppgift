import { Injectable } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';
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
        if (Array.isArray(savedData)) {
            this.blogPosts = savedData;
        }
        this.blogPostsSubject.next(this.blogPosts);
    }

    createBlogPost(blogPost: BlogPostModel): void {
        // Lägg till det nya inlägget i arrayen
        this.blogPosts.push(blogPost);
        this.saveBlogPostsToLocalStorage();
        this.blogPostsSubject.next(this.blogPosts);
    }

    addCommentToBlogPost(post: BlogPostModel, comment: string): void {
        post.comments.push(comment);
        this.saveBlogPostsToLocalStorage();
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

    private saveBlogPostsToLocalStorage(): void {
        this.storageService.setData('myPosts', this.blogPosts);
    }
}
