import { Injectable } from '@angular/core';
import { CHESSPLAYERSLIST } from '../data/mock-content-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChessPlayersService {

  constructor() { }

  getContent() : Observable<Content[]>{
    return of(CHESSPLAYERSLIST);
    }
    
}
