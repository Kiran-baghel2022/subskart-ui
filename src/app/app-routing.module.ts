import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubskartComponent } from './subskart/subskart.component';
import { VenderComponent } from './vender/vender.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subskart', component: SubskartComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'item', component: ItemComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
