import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface CommentModal {
  title:string;
  message:string;
}
@Component({
  selector: 'comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})

export class CommentModalComponent extends DialogComponent<CommentModal, boolean> implements CommentModal {
  title: string;
  message: string;
  inputComment: string;
  commentType: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  userProfile = {
    name: "Akriti Pratap",
    avatar_url: "https://avatars3.githubusercontent.com/u/10586972?v=4",
    school: "Holbrook School"
  };

  comments = [];
 
  submitComment(commentModal){
    
    var commentObj = {
      "educator": this.userProfile.name,
      "school": this.userProfile.school,
      "avatar_url": "https://avatars3.githubusercontent.com/u/10586972?v=4",
      "comment": this.inputComment,
      "commentDate": new Date(),
      "likes" : 0,
      "type": 1
      };

    if(this.commentType == "1"){
      this.comments.push(commentObj);
    }
    else if(this.commentType == "2"){
      this.comments.push(
        {
          "text" : commentObj.comment,
          "date" : commentObj.commentDate,
          "type": 2
        }
      );
    }

    // Call Service to insert in DB.

    this.result = true;
    this.close();
  }


}
