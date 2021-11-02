import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    exports: [
        MatIconModule,
        MatProgressBarModule,
        MatListModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ],
    providers: [],
})
export class MaterialModule { }