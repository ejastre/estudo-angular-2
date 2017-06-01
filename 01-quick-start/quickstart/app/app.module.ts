import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './exemplo-data-binding/data-binding.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CursosModule, DataBindingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
