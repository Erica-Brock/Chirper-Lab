import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirperComponent } from './chirper.component';

describe('ChirperComponent', () => {
  let component: ChirperComponent;
  let fixture: ComponentFixture<ChirperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
