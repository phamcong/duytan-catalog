import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '@app/shared';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbCarouselModule,
    CatalogRoutingModule,
    AngularEditorModule
  ]
})
export class CatalogModule {}
