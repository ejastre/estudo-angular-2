import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-component/input-component.component';
import { OutputPropertyComponent } from './output-component/output-component.component';
import { LifeCycleComponent } from './ciclo-component/life-cycle.component';

@NgModule({
    imports: [FormsModule],
    exports: [DataBindingComponent, LifeCycleComponent],
    declarations: [
        DataBindingComponent,
        InputPropertyComponent,
        OutputPropertyComponent,
        LifeCycleComponent
    ],
    providers: [],
})
export class DataBindingModule { }
