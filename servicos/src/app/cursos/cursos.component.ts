import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) {
    //this.cursosService = new CursosService();
    // this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}