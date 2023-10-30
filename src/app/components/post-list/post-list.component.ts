import { Component, OnInit, Input } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';
import { BlogPostModel } from 'src/app/blog-post-model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
    blogPosts: BlogPostModel[] = [];
    @Input() selectedPost: BlogPostModel | undefined;

    onPostClick(post: BlogPostModel) {
        this.selectedPost = post;
    }


    constructor(private blogService: BlogserviceService, private router: Router) { }

    onClick(post: BlogPostModel) {
        this.router.navigate(['post', post.title])
    }

    ngOnInit() {

        this.blogPosts = this.blogService.getBlogPosts();

        this.blogService.getBlogPostsObservable().subscribe((updatedBlogPosts) => {
            this.blogPosts = updatedBlogPosts;
        });
    }

}


