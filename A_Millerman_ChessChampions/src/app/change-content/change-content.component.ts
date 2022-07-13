import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { ChessPlayersService } from '../services/chess-players.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  contentItem: Content = {
    title: "",
    body: "",
    author: "",
    id: 0
  };
  tempTags: string = '';
  constructor(private chessplayersService: ChessPlayersService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.chessplayersService.addContentItem(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }

  updateContentOnServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.chessplayersService.updateContent(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
 
  }
}
