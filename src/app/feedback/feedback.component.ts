import { Component, OnInit } from '@angular/core';
import { Feedbackitem } from './feedbackitem';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<Feedbackitem> = [];

  constructor(private feedbackData: FeedbackService) {
    this.feedbackItemsList = this.feedbackData.getFeedback();
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: Feedbackitem) {
    fbItem.setAnswer(feedbackEvent.value);
  }
}
