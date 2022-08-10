import { CdkConnectedOverlay, ConnectedPosition} from '@angular/cdk/overlay';
import { Component, ContentChildren, forwardRef, Input, QueryList, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Subscription } from 'rxjs';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor {

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent<any>>;
  @ViewChild(CdkConnectedOverlay) overlay!: CdkConnectedOverlay;
  @Input() formControl!: FormControl;

  public isOpen = false;
  public position: ConnectedPosition[] = [{
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    }]

  public valueSelected?: string;
  private subscriptions: Subscription[] = [];
  private callbacks: Function[] = []; 


  ngAfterViewInit() {
    this.subscriptions = this.options.map(option => {
      return option.selected.subscribe(() => {
        this.selectOption(option);
      })
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  writeValue(obj: any): void {
    this.callbacks.forEach(callback => callback(obj));
  }

  registerOnChange(fn: any): void {
    this.callbacks.push(fn);
  }

  registerOnTouched(fn: any): void {}

  private selectOption(option: OptionComponent<any>) {
    this.valueSelected = option.label;
    this.writeValue(option.value);
    this.isOpen = false;
  }
}
