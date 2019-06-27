import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() countItemsOnPageChange = new EventEmitter();

  public countItemsOnPage: number;
  public counterItemOnPage: number;
  public itemsOnPage: number[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.counterItemOnPage = this.dataService.getCounterItemOnPage();
    this.itemsOnPage = this.dataService.getItemsOnPage();
  }

  onCountItemsOnPageChange(target) {
    const countItemsOnPage = target.value;
    this.setCountOnPage(countItemsOnPage);

    this.setCounterItemOnPage(0);

    this.countItemsOnPageChange.emit();
  }

  setCountOnPage(countItemsOnPage: number) {
    this.setCountItemOnPage(countItemsOnPage);
    this.dataService.setCurrentPage(1);
  }

  setCountItemOnPage(countItemsOnPage: number) {
    this.dataService.setCountItemsOnPage(countItemsOnPage);
    this.countItemsOnPage = this.dataService.getCountItemsOnPage();
  }

  setCounterItemOnPage(counter: number) {
    this.dataService.setCounterItemOnPage(counter);
    this.counterItemOnPage = this.dataService.getCounterItemOnPage();
  }

}
