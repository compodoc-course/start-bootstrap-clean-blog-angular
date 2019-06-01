import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { YoutubePipe } from '../pipes/youtube.pipe';
import { DomSecurePipe } from '../pipes/dom-secure.pipe';
import { SidebarModule } from './sidebar/sidebar.module';
const COMPONENTS = [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
];

const PIPES = [
  YoutubePipe,
  DomSecurePipe
];
@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [ CommonModule, RouterModule, SidebarModule ],
  exports: [
    COMPONENTS,
    PIPES
  ]
})
export class ComponentsModule { }
