import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NodeTreeComponent} from './node-tree.component';
import {DataService} from '../../data.service';
import {HttpClientModule} from '@angular/common/http';

describe('PaginatorComponent', () => {
  let component: NodeTreeComponent;
  let fixture: ComponentFixture<NodeTreeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [NodeTreeComponent],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTreeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
