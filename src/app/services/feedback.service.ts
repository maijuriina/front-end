import { Injectable } from '@angular/core';
import {Feedbackitem} from '../feedback/feedbackitem';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

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

  getFeedback(): Array<Feedbackitem> {
    return this.feedbackItemsList;
  }
}
