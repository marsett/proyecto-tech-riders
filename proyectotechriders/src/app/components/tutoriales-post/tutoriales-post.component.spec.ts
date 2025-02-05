import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesPostComponent } from './tutoriales-post.component';

describe('TutorialesPostComponent', () => {
  let component: TutorialesPostComponent;
  let fixture: ComponentFixture<TutorialesPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialesPostComponent]
    });
    fixture = TestBed.createComponent(TutorialesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
