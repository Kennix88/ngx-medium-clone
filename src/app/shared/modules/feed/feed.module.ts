import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FeedComponent } from './components/feed/feed.component';
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {FeedService} from "./services/feed.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule
  ],
  exports: [
    FeedComponent
  ],
  declarations: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule {

}
