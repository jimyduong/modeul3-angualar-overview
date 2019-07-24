import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcolorComponent } from './selectcolor.component';

describe('SelectcolorComponent', () => {
  let component: SelectcolorComponent;
  let fixture: ComponentFixture<SelectcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
