import { Injectable } from '@angular/core';
import { CHESSPLAYERSLIST } from '../data/mock-content-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = CHESSPLAYERSLIST;
    return {content};
    };


    genId(content: Content[]): number {
      return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
    }
      

    
}
