import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../models/tabla-columns';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {

  title = '';
  columnas: string[] = [];
  dataSource: any = [];

  @Input() set titulo(title: any) {
    this.title = title;
  }

  @Input() set columns(columns: string[]) {
    this.columnas = columns;
  }

  @Input() set data(data: any) {
    this.dataSource = data; 
  }

  @Output() action: EventEmitter<Action> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion: accion, fila: row });
  }







}
