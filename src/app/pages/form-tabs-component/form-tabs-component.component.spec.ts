import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabsComponentComponent } from './form-tabs-component.component';

describe('FormTabsComponentComponent', () => {
  let component: FormTabsComponentComponent;
  let fixture: ComponentFixture<FormTabsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTabsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
