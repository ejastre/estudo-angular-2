"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.url = "http://marcos.com";
        this.conteudoAtual = "";
        this.conteudoSalvo = "";
        this.isMouseOver = false;
        this.nome = "";
        this.pessoa = { nome: "", idade: "" };
        this.curso = { Nome: "Angular 2", Detalhe: "com property-bind" };
        this.urlImg = "http://animais.culturamix.com/blog/wp-content/gallery/Caracter%C3%ADsticas-dos-Animais-1/Caracter%C3%ADsticas-dos-Animais-1.jpg";
    }
    DataBindingComponent.prototype.getValue = function () {
        return 1 + 1;
    };
    DataBindingComponent.prototype.onClick = function () {
        alert("botão clicado");
    };
    DataBindingComponent.prototype.onKeyUp = function (event) {
        console.log(event);
        this.conteudoAtual = event.target.value;
    };
    DataBindingComponent.prototype.onSave = function (conteudo) {
        this.conteudoSalvo = conteudo;
    };
    DataBindingComponent.prototype.onMouseSpan = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBindingComponent.prototype.onMudouValor = function (event) {
        console.log(event);
    };
    DataBindingComponent = __decorate([
        core_1.Component({
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
            styleUrls: ["data-binding.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=data-binding.component.js.map