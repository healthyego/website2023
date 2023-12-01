import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImprintComponent} from "./imprint/imprint.component";
import {BodyComponent} from "./body/body.component";
import {ArticleCollectionComponent} from "./article-collection/article-collection.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {ScreenSizeGuard} from "./shared/guard/screen-size-guard.service";

const routes: Routes = [
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'home', redirectTo: '/articles'},
  {path: 'imprint', component: ImprintComponent},
  {
    path: 'articles',
    component: BodyComponent,
    canActivate: [ScreenSizeGuard],
    children: [
      {path: '', component: ArticleCollectionComponent},
      {path: ':id', component: ArticleDetailsComponent},
    ]
  },
  {path: '**', redirectTo: '/articles', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
