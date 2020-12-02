import { SuccessCommentCreateResponse } from "./models";
import Comment from "../entities";

/**
 * Метод для создания комментария
 * @param {Comment} comment
 */
export function createComment(comment) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new SuccessCommentCreateResponse(comment));
    }, 3000);
  });
}
