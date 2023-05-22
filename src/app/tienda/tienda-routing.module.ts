import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  {
   path:'products/category/:category',
    component:CategoryComponent
  },
  { path: '', component: TiendaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
