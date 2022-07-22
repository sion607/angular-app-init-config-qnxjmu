import { Component, Input, ViewChild} from '@angular/core';
import { CommentComponent } from './comment.component';
@Component({
  selector: 'app-post',
  template: `
  <div>
  <h3>{{post.title}}</h3>
  <app-comment [comment]="post.comment" *ngIf="post.comment"></app-comment>
  </div>
  `,
  styleUrls: [],
})
export class PostComponent {
  public author;
  @ViewChild (CommentComponent)
  comment: CommentComponent;

   getAuthor() {
    this.author = this.post.comment.author;
  }
  

  @Input() post: any;
}
