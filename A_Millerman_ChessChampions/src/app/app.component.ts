import { Component } from '@angular/core';
import { DEFAULTCHESSCONTENT } from './data/mock-content-db';
import { Content } from './models/content';
import { ChessPlayersService } from './services/chess-players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_ChessChampions';
  

  constructor(){
    
  }

  

}
