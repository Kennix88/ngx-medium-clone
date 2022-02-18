import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FeedToggleComponent} from "./components/feedToggle/feedToggle.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FeedToggleComponent],
  exports: [FeedToggleComponent]
})
export class FeedToggleModule {}
