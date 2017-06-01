import { Component } from '@angular/core';
import { InputPropertyComponent } from '../input-component/input-component.component';

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.template.html',    
    /*styles:[
        `
        .highlight{
            background-color:yellow;
            font-weight:bold;
        }
        `
    ]*/

    styleUrls:["data-binding.component.css"]
})
export class DataBindingComponent {
    constructor() { }

    url = "http://marcos.com";
    conteudoAtual: string = "";
    conteudoSalvo: string = "";
    isMouseOver: boolean = false;
    nome:string ="";

    pessoa = {nome:"", idade:"" } 
    

    curso = {Nome: "Angular 2", Detalhe: "com property-bind"}

    urlImg = "http://animais.culturamix.com/blog/wp-content/gallery/Caracter%C3%ADsticas-dos-Animais-1/Caracter%C3%ADsticas-dos-Animais-1.jpg";
    getValue() {
        return 1 + 1;
    }
    onClick() {
        alert("botão clicado");
    }

    onKeyUp(event: KeyboardEvent) {
        console.log(event);
        this.conteudoAtual = event.target.value;
    }

    onSave(conteudo: string) {
        this.conteudoSalvo = conteudo;
    }

    onMouseSpan(){
        this.isMouseOver = !this.isMouseOver;
    }

    onMudouValor(event:any)
    {
        console.log(event);
    }

}