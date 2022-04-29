import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCryptoComponent } from './api-crypto.component';

describe('ApiCryptoComponent', () => {
  let component: ApiCryptoComponent;
  let fixture: ComponentFixture<ApiCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
