import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikiComponent } from './viki.component';

describe('VikiComponent', () => {
  let component: VikiComponent;
  let fixture: ComponentFixture<VikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
