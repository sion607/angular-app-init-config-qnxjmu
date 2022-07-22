import { Component, ViewChild} from '@angular/core';
import { CommentComponent} from './comment.component';
import {PostComponent} from './post.component';
@Component({
  selector: 'app-posts',
  template: `
  <div>
    <span>List of posts:</span>
    <app-post [post]="item" *ngFor="let item of items;"></app-post>
  </div>
  <button (click)="ShowTHeName()" *ngIf="!name">Show the name</button>
  <span  *ngIf="name">Name: {{name}}</span>

  `,
  styleUrls: []
})
export class PostsComponent {
  @ViewChild(PostComponent)
  posts: PostComponent;

  public items = [
    { id: 1, title: 'Frst', comment: 'Foo' },
    { id: 2, title: 'Second', comment: 'Second' },
    { id: 3, title: 'Third', comment: 'Hello' },
  ];
  public name;

  ShowTHeName() {
    this.name = this.posts[].getAuthor();
  }
}
