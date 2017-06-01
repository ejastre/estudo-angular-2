import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
import { Aluno } from "./aluno";


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }

  private alunos: Aluno[];

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
