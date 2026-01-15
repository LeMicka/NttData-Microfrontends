import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GlobalErrorComponent } from './features/error/global-error/global-error.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: 'transactions',
        loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './TransactionsRoutes'
        }).then(m => m.routes)
    },

    { path: '**', component: GlobalErrorComponent }
];
