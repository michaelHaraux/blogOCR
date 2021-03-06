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


  onAjouterLike(){
    this.PostListComponentLoveIts ++;
  }

  onSupprimerLike(){
    this.PostListComponentLoveIts --;
  }

}
