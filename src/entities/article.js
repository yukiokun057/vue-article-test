import { Comment } from "./comment";

export class Article {
  constructor(articleData) {
    this.title = articleData.title;
    this.text = articleData.text;
    this.comments = articleData.comments.map(c => new Comment(c));
  }
}
