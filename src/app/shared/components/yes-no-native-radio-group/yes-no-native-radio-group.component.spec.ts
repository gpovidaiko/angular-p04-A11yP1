import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoNativeRadioGroupComponent } from './yes-no-native-radio-group.component';

describe('YesNoNativeRadioGroupComponent', () => {
  let component: YesNoNativeRadioGroupComponent;
  let fixture: ComponentFixture<YesNoNativeRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoNativeRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoNativeRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
