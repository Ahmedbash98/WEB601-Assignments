import { Component, OnInit } from '@angular/core';
import { DEFAULTCHESSCONTENT } from '../data/mock-content-db';
import { Content } from '../models/content';
import { ChessPlayersService } from '../services/chess-players.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {

  individualPlayer: Content = DEFAULTCHESSCONTENT;

  constructor(private chessPlayersService: ChessPlayersService) {
  }
  ngOnInit(): void {
    // getContentItem test
    this.chessPlayersService.getContentItem(1).subscribe(chessPlayersSingleItem => {
      console.log("App component - Got the content item: ", chessPlayersSingleItem);
      this.individualPlayer = chessPlayersSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.chessPlayersService.getContentItem(Number(idValue)).subscribe(chessPlayersSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessPlayersSingleItem);
      this.individualPlayer = chessPlayersSingleItem;
    });
  }


}
