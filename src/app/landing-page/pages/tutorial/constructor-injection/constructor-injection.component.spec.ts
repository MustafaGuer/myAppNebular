import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorInjectionComponent } from './constructor-injection.component';

describe('ConstructorInjectionComponent', () => {
  let component: ConstructorInjectionComponent;
  let fixture: ComponentFixture<ConstructorInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
