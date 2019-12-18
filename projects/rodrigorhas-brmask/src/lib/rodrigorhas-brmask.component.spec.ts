import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrMaskComponent } from './rodrigorhas-brmask.component';

describe('BrMaskComponent', () => {
  let component: BrMaskComponent;
  let fixture: ComponentFixture<BrMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrMaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
