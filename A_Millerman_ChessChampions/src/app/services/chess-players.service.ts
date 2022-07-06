import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHESSPLAYERSLIST, DEFAULTCHESSCONTENT } from '../data/mock-content-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChessPlayersService {

  constructor() { }

  getContent() : Observable<Content[]>{
    return of(CHESSPLAYERSLIST);
    }

    getContentItem(id: number): Observable<Content> {
      for (var i = 0; i < CHESSPLAYERSLIST.length; i++) // iterate through each chess champion
      {
        if (CHESSPLAYERSLIST[i].id === id) { // found the item
          return of(CHESSPLAYERSLIST[i]);
        }
      }
      return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
    }


  addContentItem(newContentItem: Content): Observable<Content[]> {
    CHESSPLAYERSLIST.push(newContentItem);
    return of(CHESSPLAYERSLIST);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in CHESSPLAYERSLIST with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating


    return of([]);
  }

  deleteContentItem(id: number):Observable<Content>{
    return of(CHESSPLAYERSLIST[id]);
  }

    
}
