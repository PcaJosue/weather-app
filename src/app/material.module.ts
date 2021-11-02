import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

@NgModule({
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatListModule
    ],
    providers: [],
})
export class MaterialModule { }