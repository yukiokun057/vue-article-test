import { Comment } from "../../entities";

export class SuccessCommentCreateResponse {
  /**
   * @param {Comment} comment объект комментария
   */
  constructor(comment) {
    this.comment = comment;
  }
}
