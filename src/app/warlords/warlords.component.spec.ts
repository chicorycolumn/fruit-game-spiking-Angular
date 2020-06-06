import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarlordsComponent } from './warlords.component';

describe('WarlordsComponent', () => {
  let component: WarlordsComponent;
  let fixture: ComponentFixture<WarlordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarlordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarlordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
