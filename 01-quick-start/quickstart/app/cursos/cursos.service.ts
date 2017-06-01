
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getCursos() {
        return ["Angular JS", "react",  "beribela", "teste 3"];
    }
}