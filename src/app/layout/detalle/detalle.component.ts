import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

import { ProductosService } from 'src/app/core/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  producto:any;

  constructor(
    private route:ActivatedRoute,
    private productosService:ProductosService,
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id=params.id;
     this.producto=this.productosService.getProduct(id);
    console.log(this.producto);
    });
  }

}