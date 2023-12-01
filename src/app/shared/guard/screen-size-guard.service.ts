import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {state} from "../../data-access/article.reducer";
import {enableMobileView} from "../../data-access/article.actions";


@Injectable({
  providedIn: 'root'
})
export class ScreenSizeGuard {

  constructor(
    private store: Store<{ state: state }>,
    private router: Router
  ) {
  }
  canActivate() {
    if (window.innerWidth < 768) {
      this.store.dispatch(enableMobileView())
    }
    return true;
  }
}
