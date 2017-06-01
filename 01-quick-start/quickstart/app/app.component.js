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
var AppComponent = (function () {
    function AppComponent() {
        this.valorInicial = '15';
        this.deletarConteudo = false;
    }
    AppComponent.prototype.onChangeValor = function (valor) {
        this.valorInicial = valor;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <!--\n            <h1>Hello {{name}}</h1>\n            <cursos-lista></cursos-lista>\n            <exemplo-data-binding></exemplo-data-binding> \n            -->\n            <Lifecycle [ValorInicial] = \"valorInicial\" *ngIf=\"deletarConteudo != true\"></Lifecycle>\n            <button (click)=\"onChangeValor('20')\" >muda valor</button>\n            <button (click)=\"deletarConteudo = true\">Deletar tag de Lifecycle</button>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map