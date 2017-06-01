import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
            <!--
            <h1>Hello {{name}}</h1>
            <cursos-lista></cursos-lista>
            <exemplo-data-binding></exemplo-data-binding> 
            -->
            <Lifecycle [ValorInicial] = "valorInicial" *ngIf="deletarConteudo != true"></Lifecycle>
            <button (click)="onChangeValor('20')" >muda valor</button>
            <button (click)="deletarConteudo = true">Deletar tag de Lifecycle</button>
  `,
})
export class AppComponent {
  
  valorInicial = '15';
  deletarConteudo = false;

  onChangeValor(valor: string) {
    this.valorInicial = valor;
  }
}
