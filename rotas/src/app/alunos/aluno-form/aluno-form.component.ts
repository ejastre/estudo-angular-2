import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {
  


  inscricao: Subscription;
  aluno: any;
  private formMudou:boolean = false;

  constructor(
    private route: ActivatedRoute
    , private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log("mudou");
  }


  podeDesativar() {
    return this.podeMudarRota();
    }
  podeMudarRota(){
     if(this.formMudou)
    {
      return confirm("Tem certeza que deseja sair do formulario?");
    }
    return true;
  }
}
