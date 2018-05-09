import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig]
})
export class RatingComponent implements OnInit {
  
  currentRate = 0;
  totalReviews = 0;
  constructor(config: NgbRatingConfig, service: RatingService) { 
    config.max = 5;
    config.readonly = true;
    this.currentRate = service.getRating();
    this.totalReviews = service.getReviews();
  }

  ngOnInit() {
  }

}
