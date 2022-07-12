import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { ChessPlayersService } from '../services/chess-players.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  individualChessPlayer?: Content;

  constructor(private route: ActivatedRoute,
    private chessPlayersService: ChessPlayersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);

      this.chessPlayersService.getContentItem(this.id)
        .subscribe((individualChessPlayer) => {
          this.individualChessPlayer = individualChessPlayer;
        });
    });
  }

}
