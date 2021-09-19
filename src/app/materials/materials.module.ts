import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';

// importacion de los componentes de angular materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialsModule { }
