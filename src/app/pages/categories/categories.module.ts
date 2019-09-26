import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { NovaColecaoComponent } from "./nova-colecao/nova-colecao.component";


@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent, NovoProdutoComponent, NovaColecaoComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
  ]
})
export class CategoriesModule {
 
 }
