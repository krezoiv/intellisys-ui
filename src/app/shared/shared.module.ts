import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainSidebarComponent,
    MainHeaderComponent,
    FooterComponent
  ],
  exports:[
    MainSidebarComponent,
    MainHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  
  ]
})
export class SharedModule { }
