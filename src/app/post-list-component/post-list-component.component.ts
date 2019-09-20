import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() PostListComponentTitle: string ;
  @Input() PostListComponentContent: string;
  @Input() PostListComponentLoveIts: number; 
  @Input() PostListComppnentCreated_at: Date;
   
  constructor() { }

  ngOnInit() {
  }
  getColor() {
    if(this.PostListComponentLoveIts > 0) {
      return 'green';
    } else if(this.PostListComponentLoveIts < 0) {
      return 'red';
    }
  }
}
