import { Routes } from '@angular/router';
import path from 'node:path';
import { AppComponent } from './app.component';
import { GaleryComponent } from './galery/galery.component';
import { ContactComponent } from './contact/contact.component';
import { BirbaloComponent } from './birbalo/birbalo.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'galery', component: GaleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'birbalo', component: BirbaloComponent }
];
