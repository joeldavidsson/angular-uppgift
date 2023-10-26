export class BlogPostModel {
    title: string;
    thumbnailUrl: string;
    body: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[];

    constructor() {
        this.title = '';
        this.thumbnailUrl = '';
        this.body = '';
        this.creationDate = new Date();
        this.likes = 0;
        this.dislikes = 0;
        this.comments = [];
    }
}
