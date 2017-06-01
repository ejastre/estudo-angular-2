import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService],
  exports:[
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
