import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './tienda.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    TiendaComponent,
   CategoryComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class TiendaModule { }
