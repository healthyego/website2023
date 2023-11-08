import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleCollectionComponent} from "./article-collection/article-collection.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {AppComponent} from "./app.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {BodyComponent} from "./body/body.component";


export enum routesEnum {
  ARTICLES = 'articles',
  LIST = 'articles/list',
  DETAILS = 'articles/:id',
  IMPRINT = 'imprint',
}

const routes: Routes = [
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: routesEnum.ARTICLES, component: ArticleCollectionComponent},
  {path: routesEnum.DETAILS, component: ArticleDetailsComponent},
  {path: routesEnum.IMPRINT, component: ImprintComponent},
  {path: '**', component: AppComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
