import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IKeyboard } from '../../models/keyboard';
import { Accion, getEntityPropiedades } from '../../models/tabla-columns';
import { TableDataComponent } from '../../components/table-data/table-data.component';

@Component({
  selector: 'app-keyboarb-list',
  standalone: true,
  imports: [TableDataComponent, HttpClientModule],
  templateUrl: './keyboard-list.component.html',
  styleUrl: './keyboard-list.component.css',
  providers: [
    ProductService
  ]
})
export default class KeyboardListComponent implements OnInit {
  
    constructor(private productService: ProductService){}
  
    keyboardList:IKeyboard[]=[];
    columnas: string[] = [];
  
    title:string = 'Keyboards';
  
    ngOnInit(): void {
      this.columnas = getEntityPropiedades('keyboard');
      
      this.productService.obtenerKeyboardList().subscribe((data)=>{
        console.log('aqui hay que?',data);
        this.keyboardList = data;
  
           
        console.log("hola", this.keyboardList);
      })
  
    }
  
   onAction(accion: Accion) {
       if (accion.accion == 'Editar') {
        this.editar(accion.fila)
      } else if (accion.accion == 'Eliminar') {
        this.eliminar(accion.fila.nombre)
      }
    }
 
    editar(objeto:any){
      console.log("editar", objeto)
    }
  
    eliminar(nombre:string){
      console.log("eliminar",nombre)
    }
  
    
}
