export class Feedbackitem {
  question: string;
  answer: string;
  answerList: Array<string>;

  constructor(value: string, answer?: string) {
    this.question = value;
    this.answer = answer;
    this.answerList = ['Not yet answered', 'Bad', 'Meh', 'Okay', 'Good'];
  }

}
