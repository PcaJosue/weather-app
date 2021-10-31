import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    exports: [
        MatIconModule,
        MatProgressBarModule
    ],
    providers: [],
})
export class MaterialModule { }