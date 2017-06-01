import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from "./../aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  aluno: any;


  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  constructor(
    private route: ActivatedRoute, 
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
   /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    )*/
console.log("ngOnInit:  AlunoDetalheComponent");

    this.inscricao = this.route.data.subscribe(
      (info : { aluno: Aluno}) => {
        console.log('recebendo o objt do aluno resolver');
        this.aluno = info.aluno;
        
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
