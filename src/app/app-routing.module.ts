import { NovoProdutoComponent } from './pages/categories/novo-produto/novo-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'register', loadChildren: './pages/categories/categories.module#CategoriesModule' },
  { path: 'register/new-product', loadChildren: './pages/categories/categories.module#CategoriesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
