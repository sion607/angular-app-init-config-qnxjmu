import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
@Component({
  selector: 'app-comment',
  template: `
  <span>Author: {{author}}</span>
  <div><span>{{comment}}</span>
  </div>
  `,
  styleUrls: [],
})
export class CommentComponent implements OnInit {
  @Input() comment: any;

  public author: string;

  ngOnInit() {
    this.author = this.comment.length > 5 ? 'Арестович' : 'Чоткий паца';
  }
}
