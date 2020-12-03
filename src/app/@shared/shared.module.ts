import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CustomBootstrapModule } from './../@ngx/custom-bootstrap.module';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CustomBootstrapModule, CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
