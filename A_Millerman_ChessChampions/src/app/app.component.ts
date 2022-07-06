import { Component } from '@angular/core';
import { Content } from './models/content';
import { ChessPlayersService } from './services/chess-players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_ChessChampions';
  individualPlayer: Content | undefined;

  constructor(private chessPlayerService: ChessPlayersService) {
  }
  ngOnInit(): void {
    // getContentItem test
    this.chessPlayerService.getContentItem(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.chessPlayerService.getContentItem(Number(idValue)).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });
  }

}
