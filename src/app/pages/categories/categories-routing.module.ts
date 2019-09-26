import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryFormComponent } from "./category-form/category-form.component";
import { NovoProdutoComponent } from "./novo-produto/novo-produto.component";
import { NovaColecaoComponent } from "./nova-colecao/nova-colecao.component";
import { TextMaskModule } from 'angular2-text-mask';


const routes: Routes = [
  {path: 'new-client', component: CategoryListComponent},
  {path: 'new', component: CategoryFormComponent},
  {path: ':id/edit', component: CategoryFormComponent},
  {path: 'new-product', component: NovoProdutoComponent},
  {path: 'new-collection', component: NovaColecaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), TextMaskModule],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { 
  
}
