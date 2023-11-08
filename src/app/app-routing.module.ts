import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImprintComponent} from "./imprint/imprint.component";
import {BodyComponent} from "./body/body.component";
import {HomeComponent} from "./home/home.component";
import {ArticleCollectionComponent} from "./article-collection/article-collection.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'imprint', component: ImprintComponent},
  {
    path: 'articles',
    component: BodyComponent,
    children: [
      {path: '', component: ArticleCollectionComponent},
      {path: ':id', component: ArticleDetailsComponent},
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
