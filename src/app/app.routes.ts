import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
export const routes: Routes = [
    {
        path: '',
        component: LibraryComponent,
        title: 'Library page',
    }
];
