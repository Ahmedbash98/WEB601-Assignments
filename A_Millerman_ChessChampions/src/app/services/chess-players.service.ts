import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getContentItem(id: number):Observable<Content>{
      return of(CHESSPLAYERSLIST[id]);
    }

  addContentItem(newContent: Content):Observable<Content[]>{
    return of(CHESSPLAYERSLIST);
  }

  updateContentItem(newContent: Content):Observable<Content[]>{
    return of(CHESSPLAYERSLIST);
  }

  deleteContentItem(id: number):Observable<Content>{
    return of(CHESSPLAYERSLIST[id]);
  }

    
}
