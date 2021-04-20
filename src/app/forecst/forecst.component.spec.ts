import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecstComponent } from './forecst.component';

describe('ForecstComponent', () => {
  let component: ForecstComponent;
  let fixture: ComponentFixture<ForecstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
