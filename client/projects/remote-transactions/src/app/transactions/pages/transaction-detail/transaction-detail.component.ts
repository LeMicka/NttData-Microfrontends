import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getElementService } from 'src/app/shared/services/get-element/get-element.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { WindowEventService } from 'src/app/shared/services/window-event/window-event.service';
import { IOperationType, UserService } from 'my-lib';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
})
export class TransactionDetailComponent {

  public data!: IOperationType;

  constructor(
    private getElementService: getElementService,
    private route: ActivatedRoute,
    private _windowEventService: WindowEventService,
    private _userService: UserService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      console.error('Invalid transaction ID');
      return;
    }

    this.loadTransaction(id);
  }

  public sendEvent(): void {
    this._windowEventService.dispatch('transaction-confirmed', {message: "done"});
  }

  confirmTransaction() {
    this._userService.addBalance(this.data.amount);
    this._windowEventService.dispatch('transaction-confirmed', {message: "done"});
  }

  private loadTransaction(id: number): void {
    this.getElementService.getElementData(id).subscribe({
      next: (result: IOperationType) => {
        this.data = result;
      },
      error: (err) => {
        console.error('failed to load transaction', err.message);
      },
    });
  }
}
