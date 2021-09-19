import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Importación de los modulos
import { SharedModule } from './shared/shared.module';

const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
