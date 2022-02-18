import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "../../../../../auth/store/selectors";

@Component({
  selector: 'app-feedToggle',
  templateUrl: './feedToggle.component.html',
  styleUrls: ['./feedToggle.component.scss']
})
export class FeedToggleComponent implements OnInit {
  @Input('tagName') tagNameProps!: string | null

  isLoggedIn$!: Observable<boolean | null>

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.initializeValue()
  }

  initializeValue(): void {

    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
