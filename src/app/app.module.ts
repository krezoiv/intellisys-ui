import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // Importa MatMenuModule


import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule
    MatMenuModule, // Agrega MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
