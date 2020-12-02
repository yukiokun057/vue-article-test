import { Article } from "../../entities";

export class SuccessArticleFetchResponse {
  constructor() {
    this.article = new Article({
      title: "What is Lorem Ipsum?",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: [
        {
          text: "Awesome article 😍",
          username: "Harry Potter",
          commentDate: "2020-12-01T19:32:01+0000"
        },
        {
          text: "OMG! Didnt know that! Write more! 😄",
          username: "Hermione Granger",
          commentDate: "2020-11-16T19:32:01+0000"
        }
      ]
    });
  }
}
