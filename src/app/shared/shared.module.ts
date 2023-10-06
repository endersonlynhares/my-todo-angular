import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputAuthComponent} from './input-auth/input-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonAuthComponent} from './button-auth/button-auth.component';
import {FieldControlErrorComponent} from './field-control-error/field-control-error.component';
import {CustomIconComponent} from './custom-icon/custom-icon.component';
import {CommonHeaderComponent} from './common-header/common-header.component';
import {SvgListBulletedComponent} from "./svg-components/list-bulleted";
import {SvgRoundInboxComponent} from "./svg-components/round-inbox-component";
import {SvgArrowComponent} from "./svg-components/arrow";
import {SvgTrashComponent} from "./svg-components/trash";
import {SvgPencilComponent} from "./svg-components/pencil";
import {SvgClockComponent} from "./svg-components/clock";
import {SvgDotsComponent} from "./svg-components/dots";
import {SvgCheckedComponent} from "./svg-components/checked";
import {SvgComponentsModule} from "./svg-components/svg-components-module";

@NgModule({
  declarations: [
    InputAuthComponent,
    ButtonAuthComponent,
    FieldControlErrorComponent,
    CustomIconComponent,
    CommonHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SvgComponentsModule
  ],
  exports: [
    InputAuthComponent,
    ButtonAuthComponent,
    CustomIconComponent,
    CommonHeaderComponent,
    SvgComponentsModule
  ]
})
export class SharedModule {
}
