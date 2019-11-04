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
    this.feedbackItemsList = [new Feedbackitem('Do you like this layout?'),
      new Feedbackitem('Do you like purple?'),
      new Feedbackitem('How much do you love Angular?')];

    /*this.feedbackItemsList.push(new Feedbackitem('Kysymys 1'),
      new Feedbackitem('Kysymys 2'),
      new Feedbackitem('Kysymys 3'));*/
  }

  ngOnInit() {
  }

}
