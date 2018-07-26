import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSurveyComponent } from './no-survey.component';

describe('NoSurveyComponent', () => {
  let component: NoSurveyComponent;
  let fixture: ComponentFixture<NoSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
