import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';
import { HttpClientModule} from '@angular/common/http';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
