import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ConverterComponent } from './components/converter/converter.component';

export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'users', component: UsersListComponent},
    {path: 'exchange', component: ConverterComponent}
];
