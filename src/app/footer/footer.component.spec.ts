import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../data.service';

describe('PaginatorComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FooterComponent],
      providers: [DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
