import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TreeGridComponent} from './tree-grid.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../data.service';

describe('PaginatorComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TreeGridComponent],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
