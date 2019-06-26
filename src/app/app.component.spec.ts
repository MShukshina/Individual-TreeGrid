import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';

describe('PaginatorComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let gitHubDataService: DataService;

  const gitHubDataServiceStub = {
    open: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [{provide: DataService, useValue: gitHubDataServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    gitHubDataService = fixture.debugElement.injector.get(DataService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the component', () => {
    expect(component.title).toEqual('app');
  });

  it('should called open', () => {
    /*const openSpy = jest.spyOn(gitHubDataService, 'open');*/
    fixture.detectChanges();
   /* expect(openSpy).toHaveBeenCalled();*/
  });
});
