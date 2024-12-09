import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { Accion } from '../../models/tabla-columns';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css',
})
export class TableDataComponent implements OnInit {
  selectedOption = signal(['mouselist']);

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Hola');
  }

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

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion: accion, fila: row });
  }

  onOptionChangeProductList(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption.set(selectElement.value); // Actualiza el valor seleccionado
    this.router.navigate([this.selectedOption()]); // Navega a la ruta seleccionada
  }
}
