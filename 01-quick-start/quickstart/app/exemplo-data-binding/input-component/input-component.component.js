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
var InputPropertyComponent = (function () {
    function InputPropertyComponent() {
        //@Input() //Esssa forma funciona
        this.nomeCurso = "";
        //@Input('diferente') //Essa forma Também Funciona
        this.nomeDiferente = "";
    }
    InputPropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'curso-teste',
            template: "{{ nomeCurso }} | {{ nomeDiferente }}",
            inputs: [
                "nomeCurso",
                "nomeDiferente:diferente"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InputPropertyComponent);
    return InputPropertyComponent;
}());
exports.InputPropertyComponent = InputPropertyComponent;
//# sourceMappingURL=input-component.component.js.map