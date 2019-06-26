import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() countItemsOnPage: number;

  public countItems: number;
  public counterPage: number[];
  public currentPage: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.countItems = this.dataService.getCountItems();
    this.countItemsOnPage = this.dataService.getCountItemsOnPage();
    this.currentPage = this.dataService.getCurrentPage();
    this.counterPage = this.dataService.getCounterPage();
  }

  onChangeCurrentPage() {
    this.currentPage = this.dataService.getCurrentPage();
  }

}
