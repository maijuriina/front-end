export class Feedbackitem {
  question: string;
  answer: string;
  answerList: Array<string> = [];

  constructor(value: string, answer?: string) {
    this.question = value;
    this.answer = this.answerList[0];
    this.answerList = ['No answer', 'Bad', 'Meh', 'Okay', 'Excellent'];
  }

  setAnswer(value: number) {
      this.answer = this.answerList[value];
  }
}
