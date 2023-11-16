import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from 'src/app/utils/blog-post-model';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-postinfo',
  templateUrl: './postinfo.component.html',
  styleUrls: ['./postinfo.component.css']
})
export class PostinfoComponent implements OnInit {
  post: BlogPostModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogserviceService) { }

  likePost() {
    if (this.post) {
      this.post.likes++;
      this.blogService.saveBlogPostsToLocalStorage();
    }
  }

  dislikePost() {
    if (this.post) {
      this.post.dislikes++;
      this.blogService.saveBlogPostsToLocalStorage();
    }
  }

  ngOnInit() {
    const postTitle = this.route.snapshot.params['title'];
    this.post = this.blogService.getBlogPostByTitle(postTitle);
  }
}

