import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
})
export class OptionComponent<T> implements OnInit {

  @Input() value!: T;
  @Output() selected = new EventEmitter<T>();

  constructor(public elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener("click")
  private _selected(event: Event) {
    this.selected.emit(this.value);
  }

  public get label(): string {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
}
