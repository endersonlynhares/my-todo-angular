import {Component, HostListener, OnInit} from '@angular/core';
import {AssignmentList} from "../../domain-types/models/AssigmentList";
import {ApiService} from "../../core/services/api.service";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-dropdown-scroll',
  templateUrl: './dropdown-scroll.component.html',
  styleUrls: ['./dropdown-scroll.component.sass']
})
export class DropdownScrollComponent implements OnInit, ControlValueAccessor {
  value: string = ''
  list!: AssignmentList[]
  private page: number = 1
  private max_page!: number
  filterActive: boolean = true

  toggleCollapse() {
    this.filterActive = !this.filterActive
  }

  constructor(
    private api: ApiService
  ) {
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.api.getAssignmentList(7, 1).subscribe({
      next: data => {
        this.list = data.items
        this.max_page = data.pageCount
      }
    })
  }

  selectValue(item: AssignmentList) {
    this.value = item.id
    console.log(`A lista ${item.name} foi selecionada e seu id é: ${item.id}`)
  }

  @HostListener('scroll', ['$event'])
  public onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.page += 1
      console.log('scrollando para baixo')

      if (this.page <= this.max_page) {
        this.api.getAssignmentList(7, this.page).subscribe({
          next: data => {
            this.list = [...this.list, ...data.items]
          }
        })
      }
    }
  }


}
