import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getVideoURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-Egxm5QuW9o');
  }
}
