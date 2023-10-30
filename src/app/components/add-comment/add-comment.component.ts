import { Component, Input } from '@angular/core';
import { BlogPostModel } from 'src/app/blog-post-model';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Input() post: BlogPostModel | undefined;
  comment = '';

  constructor(private blogService: BlogserviceService) { }

  addComment() {

    if (this.post) {
      this.blogService.addCommentToBlogPost(this.post, this.comment);
      this.comment = '';
      console.log(this.post, this.comment)
    }

  }
}