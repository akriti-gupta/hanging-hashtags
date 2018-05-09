import { Injectable } from '@angular/core';

@Injectable()
export class RatingService {
  rating;
  constructor() { }

  getRating(){
    //Assumption: rating's value is fetched from DB.
    this.rating = 4;
    return this.rating;
  }

  getReviews(){
    var reviews = 17;
    return reviews;
  }
}
