import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from 'ng2-bootstrap-modal';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal,private dialogService:DialogService) { }

  ngOnInit() {
  }

  showComments = true;
  showNotes = false;
  inputComment;
  commentType = "1";
  commentFilter = 1;
  
  userProfile = {
    name: "Akriti Pratap",
    avatar_url: "https://avatars3.githubusercontent.com/u/10586972?v=4",
    school: "Holbrook School"
  };

  comments = [
    {
      "educator": "Leslie",
      "school": "Greenfields School",
      "avatar_url": "https://avatars3.githubusercontent.com/u/10586972?v=4",
      "comment": "Works well if you group low support with high support",
      "commentDate": new Date(),
      "likes": 12
    },
    {
      "educator": "John",
      "school": "Hall School",
      "avatar_url": "https://avatars3.githubusercontent.com/u/10586972?v=4",
      "comment": "Works well if you group grade 2 and 3 together",
      "commentDate": new Date(),
      "likes" : 2
      }
  ];

  notes = [
    {
      "text": "Private Note 1",
      "date": new Date(),
    },
    {
      "text": "Private Note 2",
      "date": new Date(),
    }
  ];

  open(modal) {
    this.modalService.open(modal);
  }

  showComment(){
    let disposable = this.dialogService.addDialog(CommentModalComponent,
      {
        title:'Add Comment or a Private note', 
        message:'Enter Comment'
      }).subscribe((commentAdded)=>{
          if(commentAdded) {
              alert('Comment Added in DB');
          }
      });
    setTimeout(()=>{
      disposable.unsubscribe();
    },10000);
  }
  submitComment(commentModal){
    
    this.activeModal.close(commentModal);
    var commentObj = {
      "educator": this.userProfile.name,
      "school": this.userProfile.school,
      "avatar_url": "https://avatars3.githubusercontent.com/u/10586972?v=4",
      "comment": this.inputComment,
      "commentDate": new Date(),
      "likes" : 0
      };

    if(this.commentType == "1"){
      this.comments.push(commentObj);
    }
    else if(this.commentType == "2"){
      this.notes.push(
        {
          "text" : commentObj.comment,
          "date" : commentObj.commentDate
        }
      );
    }
  }

  filterComments(){
    console.log(this.commentFilter);
  }
}
