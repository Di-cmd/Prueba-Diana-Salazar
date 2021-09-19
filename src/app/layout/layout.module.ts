import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';


//importo el Modulo de materials
import { MaterialsModule } from '../materials/materials.module';
import { DetalleComponent } from './detalle/detalle.component';

import { MatBreadcrumbModule } from 'mat-breadcrumb';

// importo el swiper
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialsModule,
    SwiperModule,
    MatBreadcrumbModule
  ],
  exports:[
    MaterialsModule,
    SwiperModule,
    MatBreadcrumbModule
  ]
})
export class LayoutModule { }
