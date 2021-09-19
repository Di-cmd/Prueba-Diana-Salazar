import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }, 
  {
    path:'card',
    component:CardComponent
  }, 
  {
    path:'card/:id',
    component:DetalleComponent
  }, 
  {
    path:'carousel',
    component:CarouselComponent
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
