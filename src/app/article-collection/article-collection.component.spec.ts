import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCollectionComponent } from './article-collection.component';

describe('ArticleCollectionComponent', () => {
  let component: ArticleCollectionComponent;
  let fixture: ComponentFixture<ArticleCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCollectionComponent]
    });
    fixture = TestBed.createComponent(ArticleCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
