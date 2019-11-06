import { Component, OnInit } from '@angular/core';
import { Feedbackitem} from './feedbackitem';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackItemsList: Array<Feedbackitem> = [];

  constructor() {
    this.feedbackItemsList = [new Feedbackitem('This layout is..'),
      new Feedbackitem('Colour purple is..'),
      new Feedbackitem('How do you like cats?')];

    /*this.feedbackItemsList.push(new Feedbackitem('Kysymys 1'),
      new Feedbackitem('Kysymys 2'),
      new Feedbackitem('Kysymys 3'));*/
  }

  ngOnInit() {
  }

}
