import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {getPopularTagsAction} from "../../store/actions/getPopularTags.action";
import {Observable} from "rxjs";
import {PopularTagType} from "../../../../types/popularTag.type";
import {errorSelector, isLoadingSelector, popularTagsSelector} from "../../store/selectors";

@Component({
  selector: 'app-popularTags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  popularTags$!: Observable<PopularTagType[] | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | any>

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeValue()
    this.fetchData()
  }

  initializeValue():void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData():void {
    this.store.dispatch(getPopularTagsAction())
  }

}
