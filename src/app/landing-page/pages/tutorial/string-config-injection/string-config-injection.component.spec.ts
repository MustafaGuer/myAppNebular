import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringConfigInjectionComponent } from './string-config-injection.component';

describe('StringConfigInjectionComponent', () => {
  let component: StringConfigInjectionComponent;
  let fixture: ComponentFixture<StringConfigInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringConfigInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringConfigInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
