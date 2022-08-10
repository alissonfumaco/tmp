import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'df-card',
  templateUrl: './df-card.component.html',
  styleUrls: ['./df-card.component.css']
})
export class DfCardComponent {

  @ContentChild('header') header: TemplateRef<any> | null = null;
  @Input() value?: string;
}
