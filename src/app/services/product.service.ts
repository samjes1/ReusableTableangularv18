import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKeyboard } from '../models/keyboard';
import { IMouse } from '../models/mouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private keyboardUrl = '/assets/data/keyboardList.json';
  private mouseUrl = '/public/data/mouseList.json';


  constructor(private http: HttpClient) { }
  
  obtenerKeyboardList():Observable<IKeyboard[]> {
      
    return this.http.get<IKeyboard[]>(this.keyboardUrl);
  }
  obtenerMouseList():Observable<IMouse[]> { 
    return this.http.get<IMouse[]>("/public/data/mouseList.json");
   }
}