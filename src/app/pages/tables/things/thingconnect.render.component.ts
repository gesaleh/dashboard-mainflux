import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  template: `
    <button (click)="example()">Connect {{renderValue}}</button>
  `,
})
export class ThingConnectRenderComponent implements OnInit {

  public renderValue;

  @Input() value;
  @Input() rowData: any;

  constructor() {  }

  ngOnInit() {
    this.renderValue = this.rowData.name;
  }

  example() {
    alert(this.renderValue);
  }


}
