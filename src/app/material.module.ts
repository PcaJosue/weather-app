import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatListModule,
        MatSidenavModule
    ],
    providers: [],
})
export class MaterialModule { }