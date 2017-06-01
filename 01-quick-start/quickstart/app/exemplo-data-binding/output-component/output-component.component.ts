import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template: `
       <div>
        <button type="button" (click)="decrementa()" class="btn btn-primary">-</button>
        <input type="text" [value]="valor" readonly>
        <button type="button" (click)="incrementa()" class="btn btn-primary">+</button>
       </div>
    `
})
export class OutputPropertyComponent {
    constructor() { }

    @Input()
    valor: number = 0;

    @Output()
    mudouValor = new EventEmitter();

    incrementa() {
        this.valor++;
        this.mudouValor.emit({ novoValor: this.valor });
    }
    decrementa() {
        this.valor--;
        this.mudouValor.emit({ novoValor: this.valor });
    }
}