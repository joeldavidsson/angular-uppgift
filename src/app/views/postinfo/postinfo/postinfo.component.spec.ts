import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinfoComponent } from './postinfo.component';

describe('PostinfoComponent', () => {
  let component: PostinfoComponent;
  let fixture: ComponentFixture<PostinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostinfoComponent]
    });
    fixture = TestBed.createComponent(PostinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
