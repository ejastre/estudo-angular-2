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
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
        this.ValorInicial = 10;
    }
    LifeCycleComponent.prototype.ngOnInit = function () {
        this.log("ngOnInit");
        this.log(this.variavelLocalP);
    };
    LifeCycleComponent.prototype.ngOnChanges = function () {
        this.log("ngOnChanges");
    };
    LifeCycleComponent.prototype.ngDoCheck = function () {
        this.log("ngDoCheck");
        this.log(this.variavelLocalP);
    };
    LifeCycleComponent.prototype.ngAfterContentInit = function () {
        this.log("ngAfterContentInit");
        this.log(this.variavelLocalP);
    };
    LifeCycleComponent.prototype.ngAfterViewChecked = function () {
        this.log("ngAfterViewChecked");
        this.log(this.variavelLocalP);
    };
    LifeCycleComponent.prototype.ngAfterViewInit = function () {
        this.log("ngAfterViewInit");
    };
    LifeCycleComponent.prototype.ngAfterContentChecked = function () {
        this.log("ngAfterContentChecked");
    };
    LifeCycleComponent.prototype.ngOnDestroy = function () {
        this.log("ngOnDestroy");
    };
    LifeCycleComponent.prototype.log = function (hook) {
        console.log(hook);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycleComponent.prototype, "ValorInicial", void 0);
    __decorate([
        core_1.ViewChild("variavelLocalP"), 
        __metadata('design:type', HTMLElement)
    ], LifeCycleComponent.prototype, "variavelLocalP", void 0);
    LifeCycleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Lifecycle',
            template: "\n    <p #variavelLocalP>{{ValorInicial}}</p>\n    <p>{{variavelLocalP.textContent}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LifeCycleComponent);
    return LifeCycleComponent;
}());
exports.LifeCycleComponent = LifeCycleComponent;
//# sourceMappingURL=life-cycle.component.js.map