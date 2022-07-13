import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChessPlayersService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/chess");
  }

  // C
  addContentItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/chess", newContent, this.httpOptions)
  }

  // R
  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/chess/" + id);
  }

  // U
  // content item needs to have the id set correctly
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/chess", contentItem, this.httpOptions);
  }

  // D
  deleteContentItem(newContent: Content): Observable<undefined> {
    // display that it's processing
    // delete the item
    return of(); // send back observable so the component can subscribe to it and know it worked
  }
}

  // getContent() : Observable<Content[]>{
  //   return of(CHESSPLAYERSLIST);
  //   }

//     getContentItem(id: number): Observable<Content> {
//       for (var i = 0; i < CHESSPLAYERSLIST.length; i++) // iterate through each chess champion
//       {
//         if (CHESSPLAYERSLIST[i].id === id) { // found the item
//           return of(CHESSPLAYERSLIST[i]);
//         }
//       }
//       return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
//     }


//   addContentItem(newContentItem: Content): Observable<Content[]> {
//     CHESSPLAYERSLIST.push(newContentItem);
//     return of(CHESSPLAYERSLIST);
//   }

//   updateContentItem(newContentItem: Content): Observable<Content[]> {
//     // find item in CHESSPLAYERSLIST with same id as newcontentitem's id
//     // update the values of that item in the array with the values of the newContentItem
//     // return the array after updating


//     return of([]);
//   }

//   deleteContentItem(id: number):Observable<Content>{
//     return of(CHESSPLAYERSLIST[id]);
//   }

    
// }
