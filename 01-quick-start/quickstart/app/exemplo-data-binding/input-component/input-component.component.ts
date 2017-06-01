import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'curso-teste',
    template: `{{ nomeCurso }} | {{ nomeDiferente }}`,
    inputs:[
        "nomeCurso", 
        "nomeDiferente:diferente"
        ]
})
export class InputPropertyComponent {
    constructor() { }

    //@Input() //Esssa forma funciona
    nomeCurso: string = "";

    //@Input('diferente') //Essa forma Também Funciona
    nomeDiferente: string = "";

}