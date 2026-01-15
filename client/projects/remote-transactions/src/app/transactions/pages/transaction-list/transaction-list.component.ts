import { MyLibService } from 'my-lib';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { getListService } from 'src/app/shared/services/get-list/get-list.service';

import { Router } from '@angular/router';

import { IOperationType } from 'src/app/shared/models/operation-type.interface';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent {
  public displayedColumns: string[] = [
    'id',
    'title',
    'date',
    'amount',
    'description',
    'status',
  ];
  public isLoading: boolean = false;
  public hasError: boolean = false;
  public data: IOperationType[] = [];

  constructor(private _listData: getListService, private router: Router, private _MyLibService: MyLibService) {}

  ngOnInit(): void {
    this._listData.getListData('load').subscribe({
      next: (response: IOperationType[]) => {
        this.data = response;
      },
      error: (err: string) => {
        this.hasError = true;
      },
    });
  }

  
  public loadList(mode: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this._listData.getListData(mode).subscribe({
        next: (data: IOperationType[]) => {
        this.data = data;
        this.hasError = false;
        this.isLoading = false;
        },
        error: (err: string) => {
          this.isLoading = false;
          this.hasError = true;
        },
      })
    }, 1000);
  }

  goToDetail(transactionId: number) {
    this.router.navigate(['transactions/detail', transactionId]);
  }
}
