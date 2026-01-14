import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionErrorComponent } from './transaction-error.component';

describe('TransactionErrorComponent', () => {
  let component: TransactionErrorComponent;
  let fixture: ComponentFixture<TransactionErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransactionErrorComponent]
    });
    fixture = TestBed.createComponent(TransactionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
