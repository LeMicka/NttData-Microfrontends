import { IOperationType } from './../../../shared/models/operation-type';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getElementService } from 'src/app/shared/services/get-element/get-element.service';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {
  @Input() id!: string;
  public data!: IOperationType;

  constructor(
    private getElementService: getElementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      console.error('Invalid transaction ID');
      return;
    }

    this.loadTransaction(id);
  }

  private loadTransaction(id: number): void {

    this.getElementService.getElementData(id).subscribe({
      next: (result: IOperationType) => {
        this.data = result;
      },
      error: (err) => {
        console.error('failed to load transaction', err.message);
      } 
    })
  }
}
