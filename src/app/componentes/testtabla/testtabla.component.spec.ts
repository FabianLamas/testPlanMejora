import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttablaComponent } from './testtabla.component';

describe('TesttablaComponent', () => {
  let component: TesttablaComponent;
  let fixture: ComponentFixture<TesttablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
