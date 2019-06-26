import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PaginatorComponent} from './paginator.component';
import {DataService} from '../../data.service';
import {HttpClientModule} from '@angular/common/http';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let gitHubDataService: DataService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PaginatorComponent],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    gitHubDataService = fixture.debugElement.injector.get(DataService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
