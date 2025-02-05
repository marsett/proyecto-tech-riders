import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesVideosComponent } from './tutoriales-videos.component';

describe('TutorialesVideosComponent', () => {
  let component: TutorialesVideosComponent;
  let fixture: ComponentFixture<TutorialesVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialesVideosComponent]
    });
    fixture = TestBed.createComponent(TutorialesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
