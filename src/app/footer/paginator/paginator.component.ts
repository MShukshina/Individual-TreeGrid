import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() changeCurrentPage = new EventEmitter();

  public counterPage: number[];
  public countItems: number;
  public countItemsOnPage: number;
  public currentPage: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getCountItems();
    this.getCountItemsOnPage();
    this.getCurrentPage();
    this.getCounterPage();
    this.createCounterPage();
  }

  getCounterPage() {
    this.counterPage = this.dataService.getCounterPage();
  }

  getCountItems() {
    this.countItems = this.dataService.getCountItems();
  }

  getCurrentPage() {
    this.currentPage = this.dataService.getCurrentPage();
  }

  setCurrentPage(currentPage: number) {
    this.dataService.setCurrentPage(currentPage);
    this.getCurrentPage();
  }

  getCountItemsOnPage() {
    this.countItemsOnPage = this.dataService.getCountItemsOnPage();
  }

  createCounterPage() {
    for (let i = 1; i <= this.countItems / this.countItemsOnPage; i++) {
      this.counterPage.push(i);
    }
  }

  onChangeCurrentPage(countItemsOnPage) {
    this.getCountItemsOnPage();
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageStart() {
    this.setCurrentPage(1);
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageEnd() {
    this.setCurrentPage(this.countItems / this.countItemsOnPage);
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPagePrev() {
    this.setCurrentPage(this.currentPage - 1);
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageNext() {
    this.setCurrentPage(+this.currentPage + 1);
    this.changeCurrentPage.emit();
  }

}
