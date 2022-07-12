import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { ChessPlayersService } from '../services/chess-players.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  chessPlayersList: Content[];
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private chessPlayersService: ChessPlayersService) {   
    this.chessPlayersList = [];

  }

  ngOnInit(): void {

      // this.chessPlayersList = this.chessChampionService.getContent();
  
      // getContent test
      this.chessPlayersService.getContent().subscribe(contentArrayFromService =>
        this.chessPlayersList = contentArrayFromService);
      // getContentItem test
      // this.contentService.getContentItem(1).subscribe(contentArrayFromService => {
      //   console.log("Got the content item: ", contentArrayFromService);
      // });
  }
  checkForAuthorInList(authorNameValue: string): void {
    if (this.chessPlayersList.some(player => player.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
