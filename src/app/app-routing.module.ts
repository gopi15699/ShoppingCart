import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './Login/login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes: Routes = [{path : '', component : ListproductComponent},
                        {path : 'login',component : LoginComponent},
                        {path : '**',component : PagenotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
