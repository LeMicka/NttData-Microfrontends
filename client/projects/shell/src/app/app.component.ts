

import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { IUserType, UserService } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user!: IUserType;
  public balance$ = this._userService.balance$;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.user = {
      id: 1,
      fullName: 'John Doe',
      balance: 2500
    };
    
    this._userService.initializeBalance(this.user.balance);
  }


  @HostListener('window:transaction-confirmed', ['$event'])
  onOperationConfirmed(event: Event): void {
    console.log("inShell")
    const customEvent = event as CustomEvent<{ message: string;}>;
    console.log(customEvent.detail.message);
    console.log('Current balance:', this._userService.getBalance());


  }
}
