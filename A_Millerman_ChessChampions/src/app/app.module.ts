import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterChessPlayerTypePipe } from './pipes/filter-chess-player-type.pipe';
import { HighlightImportantDataDirective } from './directives/highlight-important-data.directive';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinksComponent } from './links/links.component';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ChangeContentComponent } from './change-content/change-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterChessPlayerTypePipe,
    HighlightImportantDataDirective,
    ContentDetailComponent,
    ContentSearchComponent,
    PageNotFoundComponent,
    LinksComponent,
    ChangeContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
