import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  }

  showComment(){
    let disposable = this.dialogService.addDialog(CommentModalComponent,
      {
        title:'Add Comment', 
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

}
