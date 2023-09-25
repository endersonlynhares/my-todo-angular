import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListsComponent} from "./lists.component";

const listsRoutes: Routes = [
  {
    path: '',
    component: ListsComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(listsRoutes)
  ],
  exports:[RouterModule]
})
export class ListsRoutingModule{

}
