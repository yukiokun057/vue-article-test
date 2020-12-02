import { SuccessArticleFetchResponse } from "./models";

/**
 * Метод для получения статьи
 */
export function fetchArticle() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new SuccessArticleFetchResponse());
    }, 3000);
  });
}
