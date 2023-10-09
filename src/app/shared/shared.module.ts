import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderRetelecomComponent } from './header-retelecom/header-retelecom.component';



@NgModule({
  declarations: [
    MainSidebarComponent,
    MainHeaderComponent,
    FooterComponent,
    HeaderRetelecomComponent
  ],
  exports:[
    MainSidebarComponent,
    MainHeaderComponent,
    FooterComponent, 
    HeaderRetelecomComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  
  ]
})
export class SharedModule { }
