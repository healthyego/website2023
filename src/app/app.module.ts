import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleTileComponent} from './article-tile/article-tile.component';
import {ArticleCollectionComponent} from './article-collection/article-collection.component';
import {CommonModule} from "@angular/common";
import {JoinArrayPipe} from "./shared/pipes/join-array.pipe";
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {StoreModule} from "@ngrx/store";
import {articleReducer} from "./data-access/article.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";
import {ArticleEffects} from "./data-access/article.effects";
import {CdkVirtualForOf, CdkVirtualScrollViewport, ScrollingModule} from "@angular/cdk/scrolling";
import {CustomDatePipe} from "./shared/pipes/custom-date.pipe";
import { HeaderComponent } from './header/header.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleTileComponent,
    ArticleCollectionComponent,
    JoinArrayPipe,
    TruncatePipe,
    CustomDatePipe,
    HeaderComponent,
    FilterBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({state: articleReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot(ArticleEffects),
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
