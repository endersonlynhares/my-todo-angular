import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SvgListBulletedComponent} from "./list-bulleted";
import {SvgRoundInboxComponent} from "./round-inbox-component";
import {SvgArrowComponent} from "./arrow";
import {SvgClockComponent} from "./clock";
import {SvgTrashComponent} from "./trash";
import {SvgPencilComponent} from "./pencil";
import {SvgDotsComponent} from "./dots";
import {SvgCheckedComponent} from "./checked";

@NgModule({
  declarations: [
    SvgListBulletedComponent,
    SvgRoundInboxComponent,
    SvgArrowComponent,
    SvgClockComponent,
    SvgArrowComponent,
    SvgTrashComponent,
    SvgPencilComponent,
    SvgDotsComponent,
    SvgCheckedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgListBulletedComponent,
    SvgRoundInboxComponent,
    SvgArrowComponent,
    SvgClockComponent,
    SvgArrowComponent,
    SvgTrashComponent,
    SvgPencilComponent,
    SvgDotsComponent,
    SvgCheckedComponent
  ]
})
export class SvgComponentsModule {

}
