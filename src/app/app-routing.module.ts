import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

const newLocal = 'app-secure';
const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'dialog', component: ProductDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
