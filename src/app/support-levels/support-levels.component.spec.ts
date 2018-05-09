import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLevelsComponent } from './support-levels.component';

describe('SupportLevelsComponent', () => {
  let component: SupportLevelsComponent;
  let fixture: ComponentFixture<SupportLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
