import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  @Input() chessPlayer?: Content;
  @Input() isLast?: boolean;

  constructor() {

  }

  ngOnInit(): void {
    if (this.chessPlayer) {
      console.log("value of chess player: ", this.chessPlayer.title);
    }
  }
  displayAuthorAndId(): void {
    console.log("Chess Player Author: ", this.chessPlayer?.author, ", Chess Player ID: ", this.chessPlayer?.id);
  }

}
