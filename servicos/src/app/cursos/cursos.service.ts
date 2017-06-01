import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
    cursos: string[] = ["Angular 2", "Java", "Phonegap"];

    emitirCursoCriado = new EventEmitter<string>();

     static criouNovoCurso = new EventEmitter<string>();

    constructor(private logService: LogService) {
        console.log('CursosService')
    }

    getCursos() {
        this.logService.consoleLog("Obtendo lista de cursos");
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Cirando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}