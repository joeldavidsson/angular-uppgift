export class BlogPostModel {

    public title: string;
    public thumbnailUrl: string;
    public body: string;
    public creationDate: Date;
    public likes: number;
    public dislikes: number;
    public comments: string[];

    constructor(title: string, thumbnailUrl: string, body: string, creationDate: Date, likes: number, dislikes: number, comments: string[]) {
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.body = body;
        this.creationDate = creationDate;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}
