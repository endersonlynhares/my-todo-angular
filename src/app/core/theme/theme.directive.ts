import {Directive, ElementRef} from '@angular/core';
import {Theme} from "./symbols";
import {Subject, takeUntil} from "rxjs";
import {ThemeService} from "./theme.service";

@Directive({
  selector: '[app-theme]'
})
export class ThemeDirective {

  private unsubscribe = new Subject();

  constructor(
    private _elementRef: ElementRef,
    private _themeService: ThemeService
  ) {
  }

  ngOnInit() {
    const active = this._themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }
    this._themeService.themeChange.pipe(takeUntil(this.unsubscribe))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
  }
}
