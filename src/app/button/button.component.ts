import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @Input() value!: string;
  // @Input() image!: string;

  @ContentChild('myButton') template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
