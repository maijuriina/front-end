import { Component, OnInit } from '@angular/core';
import { Feedbackitem } from './feedbackitem';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackItemsList: Array<Feedbackitem> = [];

  constructor() {
    /* ANOTHER WAY OF CREATING ARRAY
    this.feedbackItemsList = [new Feedbackitem('This layout is..'),
      new Feedbackitem('Colour purple is..'),
      new Feedbackitem('How do you like cats?')];*/

    this.feedbackItemsList.push(new Feedbackitem('This layout is..'),
      new Feedbackitem('Colour yellow is..'),
      new Feedbackitem('Your day is..'));
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: Feedbackitem) {
    fbItem.setAnswer(feedbackEvent.value);
  }
}
