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

  constructor(private contentService: ChessPlayersService) {
    this.chessPlayersList = [];

  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((contentArrayFromService: Content[]) => {
      this.chessPlayersList = contentArrayFromService;
    });
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
