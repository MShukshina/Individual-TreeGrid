import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'individual-tree-grid';

  public counterPage: number[];
  public countItems: number;
  public countItemsOnPage: number;

  constructor(private gitHubDataService: DataService) {}

  ngOnInit() {
    this.getCountItemsOnPage();
  }

  onCountItemsOnPageChange() {
    this.getCountItemsOnPage();
    this.getCountItems();
    this.getCounterPage();
    this.updateCounterPage();
  }

  updateCounterPage() {
    this.counterPage.length = 0;
    for (let i = 1; i <= Math.ceil(this.countItems / this.countItemsOnPage); i++) {
      this.counterPage.push(i);
    }
  }

  getCountItemsOnPage() {
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
  }

  getCountItems() {
    this.countItems = this.gitHubDataService.getCountItems();
  }

  getCounterPage() {
    this.counterPage = this.gitHubDataService.getCounterPage();
  }


}
