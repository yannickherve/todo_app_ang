import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
