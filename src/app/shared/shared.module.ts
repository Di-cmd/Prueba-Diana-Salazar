import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';


// importo el modulo de materials
import { MaterialsModule } from '../materials/materials.module';
import { MatBreadcrumbModule } from 'mat-breadcrumb';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialsModule,
    MatBreadcrumbModule
  ]
})
export class SharedModule { }
