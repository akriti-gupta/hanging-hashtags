import { Component, OnInit } from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

// const teachers = [
//   {name: "Akriti Gupta <guptaakriti83@gmail.com>", image: ""},
//   {name: "Akriti Pratap <akriti.pratap@gmail.com>", image: ""},
//   {name: "Aparajit Pratap <aparajit.pratap@gmail.com>", image: ""},
//   {name: "Sparsh Gupta <sparshgupta@gmail.com>", image: ""}

// ];

const teachers = [
  "Akriti Gupta <guptaakriti83@gmail.com>",
  "Akriti Pratap <akriti.pratap@gmail.com>",
  "Aparajit Pratap <aparajit.pratap@gmail.com>",
  "Sparsh Gupta <sparshgupta@gmail.com>"

];

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  
  public recipient: string;
  recipientArray = [];

  formatter = (result: string) => result;

  search = (text$: Observable<string>) =>
    text$.pipe(
      map(term => term === '' ? []
        : teachers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

    updateRecipients(){
      if(this.recipientArray.indexOf(this.recipient) == -1){
        this.recipientArray.push(this.recipient);
      }
      this.recipient  = "";
    }

    removeRecipient(index){
        this.recipientArray.splice(index,1);
      }

    open(shareModal) {
      this.modalService.open(shareModal);
    }

    shareActivity(shareModal){
      if(this.recipientArray.length > 1){
        // Code to email link to selected users
        console.log('Sharing activity');
      }
      this.activeModal.close(shareModal);

    }
    
  ngOnInit() {
  }

}
