import { Routes } from '@angular/router';
import { TransactionListComponent } from './transactions/pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transactions/pages/transaction-detail/transaction-detail.component';
import { TransactionErrorComponent } from './transactions/pages/transaction-error/transaction-error.component';

export const routes: Routes = [
    {
        path: 'list',
        component: TransactionListComponent,
    },
    {
        path: 'detail/:id',
        component: TransactionDetailComponent,
    },
    {
        path: '**',
        component: TransactionErrorComponent,
    },
];
