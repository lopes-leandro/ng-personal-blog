import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, CollapseModule.forRoot()],
  exports: [CollapseModule],
})
export class CustomBootstrapModule {}
