import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Initial balance (can come from API or storage)
  private readonly balanceSubject = new BehaviorSubject<number>(0);

  // Public observable (read-only)
  readonly balance$: Observable<number> = this.balanceSubject.asObservable();

  initializeBalance(balance: number): void {
    this.balanceSubject.next(balance);
  }

  // Get current balance value (synchronous)
  getBalance(): number {
    return this.balanceSubject.getValue();
  }

  // Set a new balance
  setBalance(newBalance: number): void {
    this.balanceSubject.next(newBalance);
  }

  // Increase balance
  addBalance(amount: number): void {
    const current = this.getBalance();
    this.balanceSubject.next(current + amount);
  }

  // Decrease balance
  subtractBalance(amount: number): void {
    const current = this.getBalance();
    if (current - amount < 0) {
      console.warn('Insufficient balance');
      return;
    }
    this.balanceSubject.next(current - amount);
  }

  // Reset balance (e.g., logout)
  resetBalance(): void {
    this.balanceSubject.next(0);
  }
}