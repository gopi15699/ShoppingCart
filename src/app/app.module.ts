import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProdcategoryComponent } from './prodcategory/prodcategory.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Login/login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdcategoryComponent,
    ListproductComponent,
    FooterComponent,
    LoginComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
