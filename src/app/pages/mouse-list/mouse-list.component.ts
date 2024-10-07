import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IMouse } from '../../models/mouse';
import { Accion, getEntityPropiedades } from '../../models/tabla-columns';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mouse-list',
  standalone: true,
  imports: [TableDataComponent, HttpClientModule],
  templateUrl: './mouse-list.component.html',
  styleUrl: './mouse-list.component.css',
  providers: [
    ProductService
  ]
})
export default class MouseListComponent implements OnInit {

  constructor(private productService: ProductService){}
  
  mouseList:IMouse[]=[];
  columnas: string[] = [];

  title:string = 'Mouse';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('mouse');
    
    this.productService.obtenerMouseList().subscribe((data)=>{
      console.log('aqui hay que en los mouse?',data);
      this.mouseList = data;

         
      console.log("hola", this.mouseList);
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
