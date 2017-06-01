import {
    Component
    , OnInit
    , OnChanges
    , DoCheck
    , AfterContentInit
    , AfterViewChecked
    , AfterViewInit
    , AfterContentChecked
    , OnDestroy
    , Input
    , ViewChild
} from '@angular/core';

@Component({
    moduleId: module.id
    , selector: 'Lifecycle'
    , template: `
    <p #variavelLocalP>{{ValorInicial}}</p>
    <p>{{variavelLocalP.textContent}}</p>
    `
})
export class LifeCycleComponent
    implements
    Input
    , ViewChild
    , OnInit
    , OnChanges
    , DoCheck
    , AfterContentInit
    , AfterViewChecked
    , AfterViewInit
    , AfterContentChecked
    , OnDestroy {
    constructor() { }

    @Input()
    ValorInicial = 10;


    @ViewChild("variavelLocalP")
    variavelLocalP: HTMLElement;

    ngOnInit() {
        this.log("ngOnInit");
        this.log(this.variavelLocalP);
    }

    ngOnChanges() {
        this.log("ngOnChanges");
    }

    ngDoCheck() {

        this.log("ngDoCheck");
         this.log(this.variavelLocalP);
    }

    ngAfterContentInit() {

        this.log("ngAfterContentInit");
         this.log(this.variavelLocalP);
    }

    ngAfterViewChecked() {
        this.log("ngAfterViewChecked");
         this.log(this.variavelLocalP);
    }

    ngAfterViewInit() {

        this.log("ngAfterViewInit");
    }
    ngAfterContentChecked() {
        this.log("ngAfterContentChecked");
    }
    ngOnDestroy() {
        this.log("ngOnDestroy");
    }

    private log(hook: any) {
        console.log(hook);
    }

}