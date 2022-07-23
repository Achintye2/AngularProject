import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogList } from './blog-list.component';

describe('CreateBlogList', () => {
  let component: CreateBlogList;
  let fix: ComponentFixture<CreateBlogList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogList ]
    })
    .compileComponents();

    fix = TestBed.createComponent(CreateBlogList);
    component = fix.componentInstance;
    fix.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
