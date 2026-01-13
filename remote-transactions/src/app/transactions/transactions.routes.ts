import { Routes } from '@angular/router';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { TransactionErrorComponent } from './pages/transaction-error/transaction-error.component';

export const TRANSACTIONS_ROUTES: Routes = [
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