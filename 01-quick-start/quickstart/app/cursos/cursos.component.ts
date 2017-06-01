import { Component } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
    moduleId: module.id,
    selector: "cursos-lista",
    templateUrl: "cursos.component.html"
    /*,   template: `
    <h1>Olá</h1>
<p>mundo {{teste}}</p>

<ul>
    <li *ngFor="let curso of cursos">
        {{curso}}
    </li>
</ul>
    `*/
})
export class CursosComponent {
    teste = "olha o teste rolando";

    cursos;

    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }
}
