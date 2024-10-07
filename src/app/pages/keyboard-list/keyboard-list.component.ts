import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { IKeyboard } from '../../models/keyboard';
import { getEntityPropiedades } from '../../models/tabla-columns';

@Component({
  selector: 'app-keyboarb-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './keyboard-list.component.html',
  styleUrl: './keyboard-list.component.css',
  providers: [
    ProductService
  ]
})
export default class KeyboardListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  keyboardList: IKeyboard[] = [];
  columnas: string[] = [];

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('keyboard');
    this.productService.obtenerKeyboardList().subscribe(data => {
      this.keyboardList = data;

      console.log(this.keyboardList);
      
    })
  }

}
